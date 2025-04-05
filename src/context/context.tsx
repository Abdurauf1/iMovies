import { createContext, ReactNode, useContext, useState } from "react";

const context = createContext({
  isModalOpen: false,
  setIsModalOpen: (_value: boolean) => { },
  closeModal: (_value: boolean) => { },
})

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <context.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        closeModal,
      }}
    >
      {children}
    </context.Provider>
  )
}

export const useAppContext = () => {
  return useContext(context)
}