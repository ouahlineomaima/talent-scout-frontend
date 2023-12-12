/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      backgroundImage:{

        'Logo': 'url(assets/logo/logo.svg)',
        'LogoStroke': 'url(assets/logo/logoStroke.svg)'
      },
      
      colors:{
        logoGreen: "rgb(var(--color-logoGreen), <alpha-value>)",
        darkBg: "rgb(var(--color-darkBg), <alpha-value>)",
        
        
      },
    
      
      fontFamily: {
        'poppins': ["Poppins", "sans-serif"],
        'inter': ["Inter", "sans-serif"],
        'nunito-sans': ["Nunito sans", "sans-serif"],
        'montserrat': ["Montserrat", "sans-serif"],
        'roboto': ["Roboto", "sans-serif"],
        'plus-jakarta-sans': ["Plus Jakarta Sans", "sans-serif"],
        'manrope': ["Manrope", "sans-serif"],
        'source-sans-3': ["Source Sans 3", "sans-serif"],
        'open-sans': ["Open Sans", "sans-serif"],
        'titillium-web': ["Titillium Web", "sans-serif"]
      },
      fontFace: {
        'poppins': [
          {
            src: 'url("/src/assets/fonts/Poppins/Poppins-Black.ttf") format("ttf")',
            fontWeight: '900',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Poppins/Poppins-BlackItalic.ttf") format("ttf")',
            fontWeight: '900',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/Poppins/Poppins-Bold.ttf") format("ttf")',
            fontWeight: '700',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Poppins/Poppins-BoldItalic.ttf") format("ttf")',
            fontWeight: '700',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/Poppins/Poppins-ExtraBold.ttf") format("ttf")',
            fontWeight: '800',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf") format("ttf")',
            fontWeight: '800',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/Poppins/Poppins-ExtraLight.ttf") format("ttf")',
            fontWeight: '200',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf") format("ttf")',
            fontWeight: '200',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/Poppins/Poppins-Light.ttf") format("ttf")',
            fontWeight: '300',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Poppins/Poppins-LightItalic.ttf") format("ttf")',
            fontWeight: '300',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/Poppins/Poppins-Medium.ttf") format("ttf")',
            fontWeight: '500',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Poppins/Poppins-MediumItalic.ttf") format("ttf")',
            fontWeight: '500',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/Poppins/Poppins-Regular.ttf") format("ttf")',
            fontWeight: '400',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Poppins/Poppins-Italic.ttf") format("ttf")',
            fontWeight: '400',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/Poppins/Poppins-SemiBold.ttf") format("ttf")',
            fontWeight: '600',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf") format("ttf")',
            fontWeight: '600',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/Poppins/Poppins-Thin.ttf") format("ttf")',
            fontWeight: '100',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Poppins/Poppins-ThinItalic.ttf") format("ttf")',
            fontWeight: '100',
            fontStyle: 'italic',
          }
        ],
        'inter': [
          {
            src: 'url("/src/assets/fonts/Inter/static/Inter-Black.ttf") format("ttf")',
            fontWeight: '900',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Inter/static.Inter-ExtraBold.ttf") format("ttf")',
            fontWeight: '800',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Inter/static/Inter-Bold.ttf") format("ttf")',
            fontWeight: '700',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Inter/static/Inter-SemiBold.ttf") format("ttf")',
            fontWeight: '600',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Inter/static/Inter-Medium.ttf") format("ttf")',
            fontWeight: '500',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Inter/static/Inter-Regular.ttf") format("ttf")',
            fontWeight: '400',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Inter/static/Inter-Light.ttf") format("ttf")',
            fontWeight: '300',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Inter/static/Inter-ExtraLight.ttf") format("ttf")',
            fontWeight: '200',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Inter/static/Inter-Thin.ttf") format("ttf")',
            fontWeight: '100',
            fontStyle: 'normal',
          }

        ],
        'nunito-sans': [
          {
            src: 'url("/src/assets/fonts/Nunito_sans/static/NunitoSans_7pt_Condensed-Black.ttf") format("ttf")',
            fontWeight: '900',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Nunito_sans/static/NunitoSans_7pt_Condensed-BlackItalic.ttf") format("ttf")',
            fontWeight: '900',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/Nunito_sans/static/NunitoSans_7pt_Condensed-ExtraBold.ttf") format("ttf")',
            fontWeight: '800',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Nunito_sans/static/NunitoSans_7pt_Condensed-ExtraBoldItalic.ttf") format("ttf")',
            fontWeight: '800',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/Nunito_sans/static/NunitoSans_7pt_Condensed-Bold.ttf") format("ttf")',
            fontWeight: '700',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Nunito_sans/static/NunitoSans_7pt_Condensed-BoldItalic.ttf") format("ttf")',
            fontWeight: '700',
            fontStyle: 'italic',
          },
          
          {
            src: 'url("/src/assets/fonts/Nunito_sans/static/NunitoSans_7pt_Condensed-SemiBold.ttf") format("ttf")',
            fontWeight: '600',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Nunito_sans/static/NunitoSans_7pt_Condensed-SemiBoldItalic.ttf") format("ttf")',
            fontWeight: '600',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/Nunito_sans/static/NunitoSans_7pt_Condensed-Medium.ttf") format("ttf")',
            fontWeight: '500',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Nunito_sans/static/NunitoSans_7pt_Condensed-MediumItalic.ttf") format("ttf")',
            fontWeight: '500',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/Nunito_sans/static/NunitoSans_7pt_Condensed-Regular.ttf") format("ttf")',
            fontWeight: '400',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Nunito_sans/static/NunitoSans_7pt_Condensed-RegularItalic.ttf") format("ttf")',
            fontWeight: '400',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/Nunito_sans/static/NunitoSans_7pt_Condensed-Light.ttf") format("ttf")',
            fontWeight: '300',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Nunito_sans/static/NunitoSans_7pt_Condensed-LightItalic.ttf") format("ttf")',
            fontWeight: '300',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/Nunito_sans/static/NunitoSans_7pt_Condensed-ExtraLight.ttf") format("ttf")',
            fontWeight: '200',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Nunito_sans/static/NunitoSans_7pt_Condensed-ExtraLightItalic.ttf") format("ttf")',
            fontWeight: '200',
            fontStyle: 'italic',
          }

          

        ],
        'montserrat':[
          {
            src: 'url("/src/assets/fonts/Montserrat/static/Montserrat-Black.ttf") format("ttf")',
            fontWeight: '900',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Montserrat/static/Montserrat-BlackItalic.ttf") format("ttf")',
            fontWeight: '900',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/Montserrat/static/Montserrat-ExtraBold.ttf") format("ttf")',
            fontWeight: '800',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Montserrat/static/Montserrat-ExtraBoldItalic.ttf") format("ttf")',
            fontWeight: '800',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/Montserrat/static/Montserrat-Bold.ttf") format("ttf")',
            fontWeight: '700',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Montserrat/static/Montserrat-BoldItalic.ttf") format("ttf")',
            fontWeight: '700',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf") format("ttf")',
            fontWeight: '600',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Montserrat/static/Montserrat-SemiBoldItalic.ttf") format("ttf")',
            fontWeight: '600',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/Montserrat/static/Montserrat-Medium.ttf") format("ttf")',
            fontWeight: '500',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Montserrat/static/Montserrat-MediumItalic.ttf") format("ttf")',
            fontWeight: '500',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/Montserrat/static/Montserrat-Regular.ttf") format("ttf")',
            fontWeight: '400',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Montserrat/static/Montserrat-Italic.ttf") format("ttf")',
            fontWeight: '400',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/Montserrat/static/Montserrat-Light.ttf") format("ttf")',
            fontWeight: '300',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Montserrat/static/Montserrat-LightItalic.ttf") format("ttf")',
            fontWeight: '300',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/Montserrat/static/Montserrat-ExtraLight.ttf") format("ttf")',
            fontWeight: '200',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Montserrat/static/Montserrat-ExtraLightItalic.ttf") format("ttf")',
            fontWeight: '200',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/Montserrat/static/Montserrat-Thin.ttf") format("ttf")',
            fontWeight: '100',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Montserrat/static/Montserrat-ThinItalic.ttf") format("ttf")',
            fontWeight: '100',
            fontStyle: 'italic',
          }

        ],
        'roboto': [
          {
            src: 'url("/src/assets/fonts/Roboto/static/Roboto-Black.ttf") format("ttf")',
            fontWeight: '900',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Roboto/static/Roboto-BlackItalic.ttf") format("ttf")',
            fontWeight: '900',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/Roboto/static/Roboto-Bold.ttf") format("ttf")',
            fontWeight: '700',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Roboto/static/Roboto-BoldItalic.ttf") format("ttf")',
            fontWeight: '700',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/Roboto/static/Roboto-Medium.ttf") format("ttf")',
            fontWeight: '500',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Roboto/static/Roboto-MediumItalic.ttf") format("ttf")',
            fontWeight: '500',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/Roboto/static/Roboto-Regular.ttf") format("ttf")',
            fontWeight: '400',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Roboto/static/Roboto-Italic.ttf") format("ttf")',
            fontWeight: '400',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/Roboto/static/Roboto-Light.ttf") format("ttf")',
            fontWeight: '300',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Roboto/static/Roboto-LightItalic.ttf") format("ttf")',
            fontWeight: '300',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/Roboto/static/Roboto-Thin.ttf") format("ttf")',
            fontWeight: '100',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Roboto/static/Roboto-ThinItalic.ttf") format("ttf")',
            fontWeight: '100',
            fontStyle: 'italic',
          }
        ],
        'plus-jakarta-sans': [
          {
            src: 'url("/src/assets/fonts/PlusJakartaSans/static/PlusJakartaSans-ExtraBold.ttf") format("ttf")',
            fontWeight: '800',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/PlusJakartaSans/static/PlusJakartaSans-ExtraBoldItalic.ttf") format("ttf")',
            fontWeight: '800',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/PlusJakartaSans/static/PlusJakartaSans-Bold.ttf") format("ttf")',
            fontWeight: '700',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/PlusJakartaSans/static/PlusJakartaSans-BoldItalic.ttf") format("ttf")',
            fontWeight: '700',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/PlusJakartaSans/static/PlusJakartaSans-SemiBold.ttf") format("ttf")',
            fontWeight: '600',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/PlusJakartaSans/static/PlusJakartaSans-SemiBoldItalic.ttf") format("ttf")',
            fontWeight: '600',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/PlusJakartaSans/static/PlusJakartaSans-Medium.ttf") format("ttf")',
            fontWeight: '500',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/PlusJakartaSans/static/PlusJakartaSans-MediumItalic.ttf") format("ttf")',
            fontWeight: '500',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/PlusJakartaSans/static/PlusJakartaSans-Regular.ttf") format("ttf")',
            fontWeight: '400',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/PlusJakartaSans/static/PlusJakartaSans-Italic.ttf") format("ttf")',
            fontWeight: '400',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/PlusJakartaSans/static/PlusJakartaSans-Light.ttf") format("ttf")',
            fontWeight: '300',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/PlusJakartaSans/static/PlusJakartaSans-LightItalic.ttf") format("ttf")',
            fontWeight: '300',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/PlusJakartaSans/static/PlusJakartaSans-ExtraLight.ttf") format("ttf")',
            fontWeight: '200',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/PlusJakartaSans/static/PlusJakartaSans-ExtraLigtItalic.ttf") format("ttf")',
            fontWeight: '200',
            fontStyle: 'italic',
          }
        ],
        'manrope': [
          {
            src: 'url("/src/assets/fonts/Manrope/static/Manrope-Bold.ttf") format("ttf")',
            fontWeight: '700',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Manrope/static/Manrope-ExtraBold.ttf") format("ttf")',
            fontWeight: '800',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Manrope/static/Manrope-Light.ttf") format("ttf")',
            fontWeight: '300',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Manrope/static/Manrope-ExtraLight.ttf") format("ttf")',
            fontWeight: '200',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Manrope/static/Manrope-Medium.ttf") format("ttf")',
            fontWeight: '500',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Manrope/static/Manrope-Regular.ttf") format("ttf")',
            fontWeight: '400',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/Manrope/static/Manrope-SemiBold.ttf") format("ttf")',
            fontWeight: '600',
            fontStyle: 'normal',
          },
        ],
        'source-sans-3': [
          {
            src: 'url("/src/assets/fonts/SourceSans3/static/SourceSans3-Black.ttf") format("ttf")',
            fontWeight: '900',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/SourceSans3/static/SourceSans3-BlackItalic.ttf") format("ttf")',
            fontWeight: '900',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/SourceSans3/static/SourceSans3-ExtraBold.ttf") format("ttf")',
            fontWeight: '800',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/SourceSans3/static/SourceSans3-ExtraBoldItalic.ttf") format("ttf")',
            fontWeight: '800',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/SourceSans3/static/SourceSans3-Bold.ttf") format("ttf")',
            fontWeight: '700',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/SourceSans3/static/SourceSans3-SemiBold.ttf") format("ttf")',
            fontWeight: '600',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/SourceSans3/static/SourceSans3-Medium.ttf") format("ttf")',
            fontWeight: '500',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/SourceSans3/static/SourceSans3-Regular.ttf") format("ttf")',
            fontWeight: '400',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/SourceSans3/static/SourceSans3-Light.ttf") format("ttf")',
            fontWeight: '300',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/SourceSans3/static/SourceSans3-ExtraLight.ttf") format("ttf")',
            fontWeight: '200',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/SourceSans3/static/SourceSans3-BoldItalic.ttf") format("ttf")',
            fontWeight: '700',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/SourceSans3/static/SourceSans3-SemiBoldItalic.ttf") format("ttf")',
            fontWeight: '600',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/SourceSans3/static/SourceSans3-MediumItalic.ttf") format("ttf")',
            fontWeight: '500',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/SourceSans3/static/SourceSans3-Italic.ttf") format("ttf")',
            fontWeight: '400',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/SourceSans3/static/SourceSans3-LightItalic.ttf") format("ttf")',
            fontWeight: '300',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/SourceSans3/static/SourceSans3-ExtraLightItalic.ttf") format("ttf")',
            fontWeight: '200',
            fontStyle: 'italic',
          },
        ],
        'open-sans': [
          {
            src: 'url("/src/assets/fonts/OpenSans/static/OpenSans-ExtraBold.ttf") format("ttf")',
            fontWeight: '800',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/OpenSans/static/OpenSans-ExtraBoldItalic.ttf") format("ttf")',
            fontWeight: '800',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/OpenSans/static/OpenSans-Bold.ttf") format("ttf")',
            fontWeight: '700',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/OpenSans/static/OpenSans-BoldItalic.ttf") format("ttf")',
            fontWeight: '700',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/OpenSans/static/OpenSans-SemiBold.ttf") format("ttf")',
            fontWeight: '600',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/OpenSans/static/OpenSans-SemiBoldItalic.ttf") format("ttf")',
            fontWeight: '600',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/OpenSans/static/OpenSans-Regular.ttf") format("ttf")',
            fontWeight: '400',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/OpenSans/static/OpenSans-Italic.ttf") format("ttf")',
            fontWeight: '400',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/OpenSans/static/OpenSans-Light.ttf") format("ttf")',
            fontWeight: '300',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/OpenSans/static/OpenSans-LightItalic.ttf") format("ttf")',
            fontWeight: '300',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/OpenSans/static/OpenSans-ExtraLight.ttf") format("ttf")',
            fontWeight: '200',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/OpenSans/static/OpenSans-ExtraLightItalic.ttf") format("ttf")',
            fontWeight: '200',
            fontStyle: 'italic',
          },
        ],
        'titillium-web': [
          {
            src: 'url("/src/assets/fonts/TitilliumWeb/static/TitilliumWeb-Black.ttf") format("ttf")',
            fontWeight: '800',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/TitilliumWeb/static/TitilliumWeb-Bold.ttf") format("ttf")',
            fontWeight: '700',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/TitilliumWeb/static/TitilliumWeb-BoldItalic.ttf") format("ttf")',
            fontWeight: '700',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/TitilliumWeb/static/TitilliumWeb-SemiBold.ttf") format("ttf")',
            fontWeight: '600',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/TitilliumWeb/static/TitilliumWeb-SemiBoldItalic.ttf") format("ttf")',
            fontWeight: '600',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/TitilliumWeb/static/TitilliumWeb-Regular.ttf") format("ttf")',
            fontWeight: '400',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/TitilliumWeb/static/TitilliumWeb-Italic.ttf") format("ttf")',
            fontWeight: '400',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/TitilliumWeb/static/TitilliumWeb-Light.ttf") format("ttf")',
            fontWeight: '300',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/TitilliumWeb/static/TitilliumWeb-LightItalic.ttf") format("ttf")',
            fontWeight: '300',
            fontStyle: 'italic',
          },
          {
            src: 'url("/src/assets/fonts/TitilliumWeb/static/TitilliumWeb-ExtraLight.ttf") format("ttf")',
            fontWeight: '200',
            fontStyle: 'normal',
          },
          {
            src: 'url("/src/assets/fonts/TitilliumWeb/static/TitilliumWeb-ExtraLightItalic.ttf") format("ttf")',
            fontWeight: '200',
            fontStyle: 'italic',
          },
        ]
      },
      
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    
  ],
}



