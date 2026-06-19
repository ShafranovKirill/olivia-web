import {
  getAddress,
  getCafeName,
  getInstagramUrl,
  getPhoneNumber,
  getVkUrl,
  getYmapsUrl,
} from '@/utils/env'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useContactsStore = defineStore('contacts', () => {
  const contacts = ref({
    cafeName: getCafeName(),
    phone: getPhoneNumber(),
    address: getAddress(),
    social: {
      vk: getVkUrl(),
      instagram: getInstagramUrl(),
      ymaps: getYmapsUrl(),
    },
  })
  const isModalOpen = ref(false)

  const openModal = () => {
    isModalOpen.value = true
  }

  const closeModal = () => {
    isModalOpen.value = false
  }

  const toggleModal = () => {
    isModalOpen.value = !isModalOpen.value
  }

  const copyPhoneNumber = async () => {
    try {
      await navigator.clipboard.writeText(contacts.value.phone)
      return { success: true, message: 'Номер скопирован!' }
    } catch (error) {
      console.error('Ошибка копирования:', error)
      const textArea = document.createElement('textarea')
      textArea.value = contacts.value.phone
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      return { success: true, message: 'Номер скопирован!' }
    }
  }

  const makeCall = () => {
    const isMobile = /Android|iPhone|iPad|iPod|webOS/i.test(navigator.userAgent)

    if (isMobile) {
      window.location.href = `tel:${contacts.value.phone}`
    } else {
      copyPhoneNumber()
    }
  }

  return {
    contacts,
    isModalOpen,

    openModal,
    closeModal,
    toggleModal,
    copyPhoneNumber,
    makeCall,
  }
})
