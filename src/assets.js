// Etapas:  1 Mover colores repetidos a variables 2. Relacion y Lógica de colores 3. Revision de StyledComponents asociando colores de aqui 4.Piloto con Pichincha  5.Font Size
const primaryColor = '#208aff' // Primer Color 00Colores
const primaryBackgroundColor = '#ffffff'
const primaryTextColor = '#595f63' // Grises oscuros 00Colores

const baseColor1 = '#1f8aff'
const baseColor2 = '#c6e1ff'
const baseColor3 = '#f2f8ff'
const baseColor4 = '#b4cdd4'
const baseColor5 = '#c43233' /* For button only */

const borderColor = baseColor1
const dangerColor = '#ff4445'
const whiteTextColor = '#ffffff'
const successBackgroundColor = '#dcffe1'

const gradientRGB = 'linear-gradient(rgba(22, 138, 255, 0.5), rgba(22, 138, 255, 0.5))'
const buttonAndSidebarBackgroundAndBorderColor = primaryColor

const activeButtonMainColor = '#56d1f0'
const activeButtonSecondaryColor = '#4abad6'
const activeButtonTertiaryColor = '#f5fdff'

const disabledButtonMainColor = '#e2ecf7'
const disabledButtonSecondaryColor = '#dcf7fd'
const disabledButtonTertiaryColor = '#dff0e8'
const disabledButtonFourthColor = '#ffe7e8'

const dangerButtonSecondaryColor = '#ffdcdc'

const successButtonSecondaryColor = '#33d688'
const successButtonMainColor = '#2cc57b'

export const ProjectName = 'Evertec Link de Pagos' /* Change */
export const SupportMail = 'soporte@ppm.com.ec' /* Change */
export const FontSizeTitle = '22px'
export const FontSizeSubtitleTitle = '14px'
export const FontSizeLabel = '12px'
export const FontSizeParagraph = '12px'
export const FontSizeText = '14px'
export const GenericError = 'Ha ocurrido un error'
export const GenericSuccess = 'Operación realizada con éxito'

export const InvalidForm = 'Complete los datos'
export const Required = 'Campo es requerido'
export const InvalidMail = 'Debe ingresar un correo válido'

export const BorderRadius = '10px'

export const ToastNotification = {
    success: {
        backgroundColor: successBackgroundColor,
        color: successButtonSecondaryColor,
        border: successButtonSecondaryColor,
    },
    error: {
        backgroundColor: dangerButtonSecondaryColor,
        color: dangerColor,
        border: dangerColor,
    },
    info: {
        backgroundColor: '#c6efff' /* Change */,
        color: '#479dc7' /* Change */,
        border: '#479dc7' /* Change */,
    },
    closeButtonColor: '#bdc9d1' /* Change */,
}
Object.freeze(ToastNotification)

export const Icon = {
    backgroundColor: baseColor2,
    color: primaryColor,
    borderRadius: BorderRadius,
    borderColor: primaryColor,
}
Object.freeze(Icon)

export const UploadBulk = {
    backgroundColor: primaryBackgroundColor,
    border: baseColor4,
    alternativeBackground: baseColor3,
    textColor: primaryTextColor,
}
Object.freeze(UploadBulk)

export const Header = {
    backgroundColor: primaryBackgroundColor,
    border: primaryColor,
    shadow: baseColor2,
    profile: {
        backgroundColor: baseColor2,
        color: primaryColor,
        borderRadius: BorderRadius,
        borderLeft: baseColor2,
        body: {
            backgroundColor: primaryBackgroundColor,
            color: primaryColor,
            profile: {
                backgroundColor: primaryColor,
                color: whiteTextColor,
                title: {
                    color: baseColor1,
                },
                mail: {
                    color: baseColor4,
                },
                link: {
                    color: primaryTextColor,
                },
                close: {
                    color: primaryColor,
                },
                divider: {
                    color: baseColor2,
                },
            },
        },
    },
}
Object.freeze(Header)
export const ModalAssets = {
    backgroundColor: baseColor3,
    borderColor: primaryColor,
}
Object.freeze(ModalAssets)
export const Sidebar = {
    hasIcon: true,
    borderRadius: '10px',
    backgroundColor: primaryBackgroundColor,
    border: baseColor2,
    separator: baseColor2,
    textColor: primaryTextColor,
    item: {
        color: baseColor4,
        backgroundColor: primaryBackgroundColor,
        icon: {
            color: primaryColor,
        },
        selected: {
            backgroundColor: baseColor1,
            color: whiteTextColor,
        },
        hover: {
            color: primaryColor,
            backgroundColor: primaryBackgroundColor,
        },
        active: {
            backgroundColor: buttonAndSidebarBackgroundAndBorderColor,
            color: whiteTextColor,
        },
        clicked: {
            backgroundColor: buttonAndSidebarBackgroundAndBorderColor,
            color: primaryColor,
        },
    },
}
Object.freeze(Sidebar)
export const Tab = {
    borderColor,
    backgroundColor: primaryBackgroundColor,
    backgroundFooterColor: baseColor3,
}
Object.freeze(Tab)
export const Input = {
    color: primaryTextColor,
    placeholder: baseColor4,
    borderColor,
    backgroundColor: primaryBackgroundColor,
    checkboxLabel: primaryColor,
}
Object.freeze(Input)
export const Body = {
    backgroundColor: baseColor3,
    title: {
        color: primaryColor,
        border: baseColor2,
    },
    primaryCard: {
        backgroundColor: primaryBackgroundColor,
        borderColor: baseColor2,
        borderRadius: BorderRadius,
    },
    secondaryCard: {
        backgroundColor: baseColor2,
        borderColor: primaryColor,
        borderRadius: BorderRadius,
    },
    informationCard: {
        backgroundColor: baseColor3,
        borderColor: primaryColor,
        color: primaryColor,
        borderRadius: BorderRadius,
    },
    error: {
        color: 'red',
        backgroundColor: primaryBackgroundColor,
    },
    label: {
        color: '#cadce1' /* Change */,
        backgroundColor: primaryBackgroundColor,
    },
}
Object.freeze(Body)
export const Table = {
    action: {
        backgroundColor: primaryBackgroundColor,
        border: baseColor4,
        activeColor: primaryTextColor,
        deleteColor: dangerColor,
        delete: {
            iconColor: dangerColor,
            color: baseColor4,
        },
        edit: {
            iconColor: baseColor4,
            color: baseColor4,
        },
        cancel: {
            iconColor: primaryColor,
            color: baseColor4,
        },
        active: {
            iconColor: primaryColor,
            color: baseColor4,
        },
    },
    backgroundColor: primaryBackgroundColor,
    header: {
        backgroundColor: primaryBackgroundColor,
        color: baseColor4,
    },
    body: {
        backgroundColor: primaryBackgroundColor,
        color: primaryTextColor,
        border: baseColor2,
        columnBackgroundColor: '#fbfbfb' /* Change for primaryBackgroundColor */,
        opacity: 0.5 /* Change to 1 Pichincha */,
    },
    item: {
        backgroundColor: whiteTextColor,
        border: baseColor4,
    },
    modal: {
        title: primaryColor,
        close: baseColor2,
    },
    pagination: {
        color: primaryColor,
        backgroundColor: primaryBackgroundColor,
        border: baseColor3,
        active: {
            color: primaryColor,
        },
        default: {
            color: baseColor4,
        },
    },
}
Object.freeze(Table)
export const Button = {
    hasIcon: true,
    fontWeight: 400,
    borderRadius: BorderRadius,
    primary: {
        defaultColor: {
            backgroundColor: primaryColor,
            color: whiteTextColor,
            borderColor,
            hover: {
                backgroundColor: buttonAndSidebarBackgroundAndBorderColor,
                color: whiteTextColor,
                borderColor: buttonAndSidebarBackgroundAndBorderColor,
            },
            active: {
                backgroundColor: buttonAndSidebarBackgroundAndBorderColor,
                color: primaryColor,
                borderColor: buttonAndSidebarBackgroundAndBorderColor,
            },
            disable: {
                backgroundColor: activeButtonTertiaryColor,
                color: baseColor2,
                borderColor: activeButtonTertiaryColor,
            },
        },
        activeColor: {
            backgroundColor: activeButtonMainColor,
            color: whiteTextColor,
            borderColor: activeButtonMainColor,
            hover: {
                backgroundColor: activeButtonSecondaryColor,
                color: whiteTextColor,
                borderColor: activeButtonSecondaryColor,
            },
            active: {
                backgroundColor: activeButtonSecondaryColor,
                color: activeButtonMainColor,
                borderColor: activeButtonSecondaryColor,
            },
            disable: {
                backgroundColor: disabledButtonSecondaryColor,
                color: whiteTextColor,
                borderColor: disabledButtonSecondaryColor,
            },
        },
        successColor: {
            backgroundColor: successButtonSecondaryColor,
            color: whiteTextColor,
            borderColor: successButtonSecondaryColor,
            hover: {
                backgroundColor: successButtonMainColor,
                color: whiteTextColor,
                borderColor: successButtonMainColor,
            },
            active: {
                backgroundColor: successButtonMainColor,
                color: successButtonSecondaryColor,
                borderColor: successButtonMainColor,
            },
            disable: {
                backgroundColor: disabledButtonTertiaryColor,
                color: whiteTextColor,
                borderColor: disabledButtonTertiaryColor,
            },
        },
        dangerColor: {
            backgroundColor: dangerColor,
            color: whiteTextColor,
            borderColor: dangerColor,
            hover: {
                backgroundColor: baseColor5,
                color: whiteTextColor,
                borderColor: baseColor5,
            },
            active: {
                backgroundColor: baseColor5,
                color: dangerColor,
                borderColor: dangerColor,
            },
            disable: {
                backgroundColor: disabledButtonFourthColor,
                color: whiteTextColor,
                borderColor: disabledButtonFourthColor,
            },
        },
    },
    secondary: {
        defaultColor: {
            backgroundColor: primaryBackgroundColor,
            color: primaryColor,
            borderColor: primaryColor,
            hover: {
                backgroundColor: primaryBackgroundColor,
                color: buttonAndSidebarBackgroundAndBorderColor,
                borderColor: buttonAndSidebarBackgroundAndBorderColor,
            },
            active: {
                backgroundColor: activeButtonTertiaryColor,
                color: primaryColor,
                borderColor: primaryColor,
            },
            disable: {
                backgroundColor: disabledButtonMainColor,
                color: disabledButtonMainColor,
                borderColor: disabledButtonMainColor,
            },
        },
        activeColor: {
            backgroundColor: primaryBackgroundColor,
            color: activeButtonMainColor,
            borderColor: activeButtonMainColor,
            hover: {
                backgroundColor: primaryBackgroundColor,
                color: activeButtonSecondaryColor,
                borderColor: activeButtonSecondaryColor,
            },
            active: {
                backgroundColor: activeButtonTertiaryColor,
                color: activeButtonMainColor,
                borderColor: activeButtonMainColor,
            },
            disable: {
                backgroundColor: primaryBackgroundColor,
                color: disabledButtonSecondaryColor,
                borderColor: disabledButtonSecondaryColor,
            },
        },
        successColor: {
            backgroundColor: primaryBackgroundColor,
            color: successButtonSecondaryColor,
            borderColor: successButtonSecondaryColor,
            hover: {
                backgroundColor: successButtonMainColor,
                color: whiteTextColor,
                borderColor: successButtonMainColor,
            },
            active: {
                backgroundColor: successButtonMainColor,
                color: successButtonSecondaryColor,
                borderColor: successButtonMainColor,
            },
            disable: {
                backgroundColor: disabledButtonTertiaryColor,
                color: whiteTextColor,
                borderColor: disabledButtonTertiaryColor,
            },
        },
        dangerColor: {
            backgroundColor: primaryBackgroundColor,
            color: dangerColor,
            borderColor: dangerColor,
            hover: {
                backgroundColor: baseColor5,
                color: whiteTextColor,
                borderColor: baseColor5,
            },
            active: {
                backgroundColor: baseColor5,
                color: dangerColor,
                borderColor: dangerColor,
            },
            disable: {
                backgroundColor: disabledButtonFourthColor,
                color: whiteTextColor,
                borderColor: disabledButtonFourthColor,
            },
        },
    },
    tertiary: {
        defaultColor: {
            backgroundColor: baseColor2,
            color: primaryColor,
            borderColor: baseColor2,
            hover: {
                backgroundColor: baseColor2,
                color: buttonAndSidebarBackgroundAndBorderColor,
                borderColor: buttonAndSidebarBackgroundAndBorderColor,
            },
            active: {
                backgroundColor: activeButtonTertiaryColor,
                color: primaryColor,
                borderColor: '#eaf9fd' /* Change */,
            },
            disable: {
                backgroundColor: '#f5f8fb' /* Change */,
                color: disabledButtonMainColor,
                borderColor: '#f5f8fb' /* Change */,
            },
        },
        activeColor: {
            backgroundColor: '#c8f4ff',
            color: activeButtonMainColor,
            borderColor: activeButtonMainColor,
            hover: {
                backgroundColor: primaryBackgroundColor,
                color: activeButtonSecondaryColor,
                borderColor: activeButtonSecondaryColor,
            },
            active: {
                backgroundColor: activeButtonTertiaryColor,
                color: activeButtonMainColor,
                borderColor: activeButtonMainColor,
            },
            disable: {
                backgroundColor: primaryBackgroundColor,
                color: disabledButtonSecondaryColor,
                borderColor: disabledButtonSecondaryColor,
            },
        },
        successColor: {
            backgroundColor: successBackgroundColor,
            color: successButtonSecondaryColor,
            borderColor: successButtonSecondaryColor,
            hover: {
                backgroundColor: successButtonMainColor,
                color: whiteTextColor,
                borderColor: successButtonMainColor,
            },
            active: {
                backgroundColor: successButtonMainColor,
                color: successButtonSecondaryColor,
                borderColor: successButtonMainColor,
            },
            disable: {
                backgroundColor: disabledButtonTertiaryColor,
                color: whiteTextColor,
                borderColor: disabledButtonTertiaryColor,
            },
        },
        dangerColor: {
            backgroundColor: dangerButtonSecondaryColor,
            color: dangerColor,
            borderColor: dangerColor,
            hover: {
                backgroundColor: baseColor5,
                color: whiteTextColor,
                borderColor: baseColor5,
            },
            active: {
                backgroundColor: baseColor5,
                color: dangerColor,
                borderColor: dangerColor,
            },
            disable: {
                backgroundColor: disabledButtonFourthColor,
                color: whiteTextColor,
                borderColor: disabledButtonFourthColor,
            },
        },
    },
}
Object.freeze(Button)
export const LinkAssets = {
    primary: {
        color: primaryColor,
        hover: {
            color: buttonAndSidebarBackgroundAndBorderColor,
        },
        active: {
            color: primaryColor,
        },
        disable: {
            color: whiteTextColor,
        },
    },
    secondary: {
        color: activeButtonMainColor,
        hover: {
            color: buttonAndSidebarBackgroundAndBorderColor,
        },
        active: {
            color: primaryColor,
        },
        disable: {
            color: whiteTextColor,
        },
    },
    tertiary: {
        color: whiteTextColor,
        hover: {
            color: buttonAndSidebarBackgroundAndBorderColor,
        },
        active: {
            color: primaryColor,
        },
        disable: {
            color: whiteTextColor,
        },
    },
}
Object.freeze(LinkAssets)
export const Login = {
    backgroundColor: baseColor3,
    textColor: whiteTextColor,
    border: primaryBackgroundColor,
    backgroundImage: 'https://evertec-ec.s3.us-east-2.amazonaws.com/login.jpg',
    form: {
        textColor: primaryTextColor,
        titleColor: primaryColor,
        gradientRGB,
    },
    logo: {
        off: {
            color: baseColor2,
            backgroundColor: primaryBackgroundColor,
            border: baseColor2,
        },
        on: {
            color: baseColor2,
            backgroundColor: baseColor1,
            border: baseColor3,
        },
    },
    link: {
        color: activeButtonMainColor,
    },
}
Object.freeze(Login)
export const Footer = {
    backgroundColor: baseColor3,
    border: primaryBackgroundColor,
    color: baseColor1,
}
Object.freeze(Footer)
export const Paragraph = {
    color: primaryTextColor,
    fontSize: FontSizeParagraph,
}
Object.freeze(Paragraph)

export const EstablishmentStages = {
    stagesWrapperBackground: baseColor3,
    separatorBorder: baseColor2,
    stagesItem: {
        color: baseColor2,
        borderColor: '#cfe5ff' /*Change*/,
        backgroundColor: {
            active: primaryColor,
            inactive: baseColor2,
        },
        icon: {
            active: baseColor2,
            inactive: primaryColor,
        },
        textColor: {
            active: baseColor2,
            inactive: whiteTextColor,
        },
    },
}
Object.freeze(EstablishmentStages)

export const Card = {
    hasIcon: true,
    active: {
        backgroundColor: baseColor2,
        color: primaryColor,
        borderColor: primaryColor,
        icon: {
            color: baseColor2,
            backgroundColor: primaryColor,
        },
    },
    separator: {
        active: {
            color: baseColor2,
        },
        inactive: {
            color: primaryColor,
        },
    },
    children: {
        color: primaryTextColor,
    },
    inactive: {
        backgroundColor: primaryBackgroundColor,
        color: primaryColor,
        borderColor: baseColor2,
        icon: {
            color: primaryColor,
            backgroundColor: baseColor2,
        },
    },
}

Object.freeze(Card)

export const Chip = {
    color: primaryColor,
    border: primaryColor,
    borderRadius: '10px',
    boxShadow: '0 0 16px 12px rgba(59, 83, 99, 0.06)',
    padding: '10px 30px',
    rejectedStatusColor: dangerColor,
}

Object.freeze(Chip)

export const Form = {
    input: {
        color: primaryTextColor,
        borderColor: baseColor4,
        placeholder: baseColor4,
    },
    label: {
        color: baseColor4,
        backgroundColor: primaryBackgroundColor,
        focus: primaryTextColor,
    },
    error: {
        color: dangerColor,
    },
    circle: {
        activeColor: primaryColor,
        inactiveColor: baseColor2,
    },
}

Object.freeze(Form)

export const LogoAsset = {
    LogoHeader: {
        src: 'https://evertec-ec.s3.us-east-2.amazonaws.com/logo-evertec.svg',
        styles: {
            cursor: 'pointer',
            width: '28px',
            height: '37px',
            media: 'xl',
        },
    },
    LogoLogin: {
        src: 'https://evertec-ec.s3.us-east-2.amazonaws.com/logo-evertec.svg',
        styles: {
            width: '40px',
            height: '53px',
        },
    },
}
Object.freeze(LogoAsset)
export const Delimiter = {
    borderColor: baseColor2,
    height: '1px',
}

Object.freeze(Delimiter)

export const Alert = {
    //Used only in PayPage
    backgroundSuccess: successBackgroundColor,
    colorSuccess: successButtonSecondaryColor,
    iconColorSucess: successButtonSecondaryColor,
    backgroundError: dangerButtonSecondaryColor,
    colorError: dangerColor,
    iconColorError: dangerColor,
    backgroundWarning: '#fffadb',
    colorWarning: primaryTextColor,
    iconColorWarning: '#fddc02' /* Change */,
}

Object.freeze(Alert)

export const PayPage = {
    title: primaryColor,
    titleValue: baseColor4,
    value: primaryTextColor,
    tabWrapperBackground: baseColor3,
    tabBorderRight: baseColor2,
    borderColor: '#e3ecf2' /* Change */,
}

Object.freeze(PayPage)
export const FaqsTitle = {
    color: primaryColor,
    fontSize: FontSizeTitle,
}
Object.freeze(FaqsTitle)

export const Accordion = {
    color: primaryTextColor,
    fontSize: FontSizeText,
    normalBackground: primaryBackgroundColor,
    activeBackground: baseColor2,
    borderSection: baseColor4,
}
Object.freeze(Accordion)

export const Tooltip = {
    color: primaryTextColor,
    background: baseColor2,
    fontSize: FontSizeParagraph,
}
Object.freeze(Tooltip)
