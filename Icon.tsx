import { Icon as AntIcon } from "antd"
import * as React from "react"
import { Stack, PropertyControls, ControlType, Frame } from "framer"
import "./App.css"

interface Props {
    type: string
    color: string
    theme: string
    size?: number
    spin: boolean
    rotate: number
    twoToneColor: string
}

export class Icon extends React.Component<Props> {
    static defaultProps = {
        width: 40,
        height: 40,
        type: "heart",
        theme: "outlined",
        size: 40,
        spin: false,
        rotate: 0,
    }

    static propertyControls: PropertyControls = {
        type: { type: ControlType.String, title: "Type" },
        color: { type: ControlType.Color, title: "Color" },
        theme: {
            type: ControlType.Enum,
            title: "Theme",
            options: ["filled", "outlined", "twoTone"],
        },
        size: { type: ControlType.Number, title: "Size" },
        spin: { type: ControlType.Boolean, title: "Spin" },
        rotate: { type: ControlType.Number, title: "Rotate" },
        twoToneColor: { type: ControlType.Color, title: "Two-tone color" },
    }

    render() {
        const {
            type,
            color,
            theme,
            size,
            spin,
            rotate,
            twoToneColor,
        } = this.props

        return (
            <Frame
                background="none"
                size={size}
                center
            >
                <AntIcon
                    style={{
                        fontSize: `${size}px`,
                        alignSelf: "center",
                        justifySelf: "center", color: `${color}` }}
                    type={type}
                    theme={theme}
                    spin={spin}
                    rotate={rotate}
                    twoToneColor={twoToneColor}
                />
            </Frame>
        )
    }
}
