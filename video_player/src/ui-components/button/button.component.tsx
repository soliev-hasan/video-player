import React, { ReactNode } from "react"
import {
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native"
import styles from "./button.style"
import { ChevronDown } from "lucide-react-native"

export const Button = ({
  iconSize = 14,
  type = "simple",
  touchableOpacityStyles,
  iconStyle,
  showIcon = true,
  children,
  styleText,
  ...props
}: {
  iconSize?: number
  touchableOpacityStyles?: TextStyle
  iconStyle?: TextStyle
  type?: "simple" | "drop-down-opener"
  showIcon?: boolean
  styleText?: TextStyle
  children: ReactNode
} & TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      style={{ ...styles.buttonContainer, ...touchableOpacityStyles }}
      {...props}
    >
      <Text style={styleText}> {children}</Text>

      {type === "drop-down-opener" && <ChevronDown color="#8592AA" size={22} />}
    </TouchableOpacity>
  )
}
