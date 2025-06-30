import { useState } from "react"
import { EyeIcon, EyeOffIcon, LockIcon } from "lucide-react"

import { Input } from "@/components/ui/input"

export default function InputWithIcons() {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false)

	const togglePasswordVisibility = () => {
		setIsPasswordVisible(!isPasswordVisible)
	}

	const passwordType = isPasswordVisible ? "text" : "password"

	return (
		<Input
			placeholder="Password"
			inputContainerClassName="w-80"
			type={passwordType}
			leadingIcon={<LockIcon />}
			trailingIcon={
				isPasswordVisible ? (
					<EyeIcon
						className="hover:text-foreground pointer-events-auto cursor-pointer transition-colors duration-200"
						onClick={togglePasswordVisibility}
					/>
				) : (
					<EyeOffIcon
						className="hover:text-foreground pointer-events-auto cursor-pointer transition-colors duration-200"
						onClick={togglePasswordVisibility}
					/>
				)
			}
		/>
	)
}
