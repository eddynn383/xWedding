'use client'
import { useCallback, useRef, useEffect, MouseEventHandler, useState } from "react"
import { useRouter } from "next/navigation"
import sx from "@/styles/component.module.scss"

type ModalProps = {
    type?: "drawer" | "popup";
    isClosable: boolean;
    children: React.ReactNode;
}

export default function Modal({ type = "popup", isClosable,  children }: ModalProps) {
    const overlay = useRef(null)
    const wrapper = useRef(null)
    const router = useRouter()
    const [modalStatus, setModalStatus] = useState("inactive");

    const onDismiss = useCallback(() => {
        router.back()
    }, [router])

    const onClick: MouseEventHandler = useCallback((e) => {
            if(isClosable) {                
                if (e.target === overlay.current || e.target === wrapper.current) {
                    if (onDismiss) onDismiss()
                }
            }
        },
        [isClosable, onDismiss, overlay, wrapper]
    )

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if(isClosable) { 
                if (e.key === 'Escape') onDismiss()
            }
        },
        [isClosable, onDismiss]
    )

    useEffect(() => {
        const timer = setTimeout(() => {
            setModalStatus("active");
        }, 100);


        document.addEventListener('keydown', onKeyDown)
        return () => {
            document.removeEventListener('keydown', onKeyDown)
            clearTimeout(timer);
        }
    }, [onKeyDown])

    return (
        <div className={sx["modal"]} ref={overlay} data-state={modalStatus} data-type={type} onClick={onClick} >
            <div className={sx["modal-inner"]} ref={wrapper}>
                {children}
            </div>
        </div>
    )
}