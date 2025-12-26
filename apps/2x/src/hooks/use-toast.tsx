"use client"

import { Toast } from "@base-ui/react/toast"

export const toastManager = Toast.createToastManager()

export const useToast = Toast.useToastManager
