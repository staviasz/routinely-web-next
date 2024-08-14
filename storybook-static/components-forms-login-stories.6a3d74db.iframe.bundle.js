"use strict";(self.webpackChunkroutnely=self.webpackChunkroutnely||[]).push([[305],{"./public/icons/infoErro.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={src:"static/media/infoErro.430a611b.svg",height:24,width:24,blurDataURL:"static/media/infoErro.430a611b.svg"}},"./src/components/buttons/ButtonPrimary/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ButtonPrimary});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/buttons/ButtonPrimary/styles.tsx");function ButtonPrimary(param){let{children,hover=!0,secondaryColor,href,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:href?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_1__.U,{href,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_1__.$,{...props,$hover:hover,$secondaryColor:secondaryColor,children})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_1__.$,{...props,$hover:hover,$secondaryColor:secondaryColor,children})})}ButtonPrimary.__docgenInfo={description:"",methods:[],displayName:"ButtonPrimary",props:{children:{required:!0,tsType:{name:"string"},description:""},hover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},secondaryColor:{required:!1,tsType:{name:"boolean"},description:""},href:{required:!1,tsType:{name:"string"},description:""}}}},"./src/components/buttons/ButtonPrimary/styles.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button,U:()=>LinkNext});var _styles_variables__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/styles/variables.ts"),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Button=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.button.withConfig({componentId:"sc-349789ec-0"})(["width:100%;padding:10px 16px;border-radius:8px;border:none;background-color:",";color:",";font-size:",";font-weight:500;line-height:20px;letter-spacing:0.1px;cursor:pointer;",""],_styles_variables__WEBPACK_IMPORTED_MODULE_0__.T.primary,_styles_variables__WEBPACK_IMPORTED_MODULE_0__.T.white,_styles_variables__WEBPACK_IMPORTED_MODULE_0__.l.sizes.xxxsmall,(param=>{let{$hover,$secondaryColor}=param;return $hover&&(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(["&:hover{transition:all 0.4s ease;background-color:",";color:",";font-weight:bold;}",""],_styles_variables__WEBPACK_IMPORTED_MODULE_0__.T.secondary,_styles_variables__WEBPACK_IMPORTED_MODULE_0__.T.black,$secondaryColor&&(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(["background-color:",";&:hover{transition:all 0.4s ease;background-color:",";color:",";font-weight:bold;}"],_styles_variables__WEBPACK_IMPORTED_MODULE_0__.T.secondary,_styles_variables__WEBPACK_IMPORTED_MODULE_0__.T.tertiary,_styles_variables__WEBPACK_IMPORTED_MODULE_0__.T.white))})),LinkNext=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(next_link__WEBPACK_IMPORTED_MODULE_1___default()).withConfig({componentId:"sc-349789ec-1"})(["width:100%;"])},"./src/components/forms/fields/ErrorMessage/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ErrorMessage});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/forms/fields/ErrorMessage/styles.tsx");function ErrorMessage(param){let{children}=param;const formatedMessage=children[0].toUpperCase()+children.slice(1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_1__.K,{children:formatedMessage})}ErrorMessage.__docgenInfo={description:"",methods:[],displayName:"ErrorMessage",props:{children:{required:!0,tsType:{name:"string"},description:""}}}},"./src/components/forms/fields/ErrorMessage/styles.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>ErrorMessage});var _styles_variables__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/styles/variables.ts");const ErrorMessage=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.p.withConfig({componentId:"sc-e2639b85-0"})(["color:",";font-size:",";max-width:368px;text-align:justify;"],_styles_variables__WEBPACK_IMPORTED_MODULE_0__.T.danger,_styles_variables__WEBPACK_IMPORTED_MODULE_0__.l.sizes.xxxsmall)},"./src/components/forms/fields/Input/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Input});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_ErrorMessage__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/forms/fields/ErrorMessage/index.tsx"),_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/forms/fields/Input/styles.tsx");function Input(param){let{children,id,label,register,hasError,errorMessage,as,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__.i,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__.A0,{$hasErro:hasError,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_2__.S0,{as,$hasErro:hasError,id,role:"textbox",...register,...props}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__.Zr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_2__.Y1,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_2__.JU,{htmlFor:id,children:label})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_2__.yL,{children})]}),errorMessage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_1__.A,{children:errorMessage})]})}Input.__docgenInfo={description:"",methods:[],displayName:"Input",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},label:{required:!1,tsType:{name:"string"},description:""},id:{required:!0,tsType:{name:"string"},description:""},register:{required:!1,tsType:{name:"UseFormRegisterReturn",elements:[{name:"string"}],raw:"UseFormRegisterReturn<string>"},description:""},hasError:{required:!1,tsType:{name:"boolean"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:""}}}},"./src/components/forms/fields/Input/styles.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A0:()=>InputContainer,JU:()=>Label,S0:()=>InputStyle,Y1:()=>BorderWhite,Zr:()=>LabelInput,i:()=>Div,yL:()=>Children});var _styles_variables__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/styles/variables.ts"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_ErrorMessage_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/forms/fields/ErrorMessage/styles.tsx");const Div=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div.withConfig({componentId:"sc-a5e6bad6-0"})(["max-width:100%;width:100%;"]),InputContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div.withConfig({componentId:"sc-a5e6bad6-1"})(["position:relative;display:flex;flex-direction:column;color:",";~ ","{margin-top:-24px;}"],(param=>{let{$hasErro}=param;return $hasErro?_styles_variables__WEBPACK_IMPORTED_MODULE_0__.T.danger:_styles_variables__WEBPACK_IMPORTED_MODULE_0__.T.black}),_ErrorMessage_styles__WEBPACK_IMPORTED_MODULE_1__.K),Children=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div.withConfig({componentId:"sc-a5e6bad6-2"})(["position:absolute;top:35%;right:3%;"]),BorderWhite=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.span.withConfig({componentId:"sc-a5e6bad6-3"})(["position:relative;display:block;height:1px;background-color:",";top:12px;left:-2px;width:113%;"],_styles_variables__WEBPACK_IMPORTED_MODULE_0__.T.white),Label=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.label.withConfig({componentId:"sc-a5e6bad6-4"})(["position:relative;z-index:1;"]),LabelInput=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div.withConfig({componentId:"sc-a5e6bad6-5"})(["font-size:",";font-weight:normal;line-height:24px;letter-spacing:0.5px;position:absolute;top:31%;left:16px;pointer-events:none;"],_styles_variables__WEBPACK_IMPORTED_MODULE_0__.l.sizes.xxsmall),InputStyle=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.input.withConfig({componentId:"sc-a5e6bad6-6"})(["border:1px solid ",";border-radius:8px;height:56px;outline:none;padding:8px 0 8px 16px;font-size:",";line-height:24px;letter-spacing:0.5px;resize:none;&:focus ~ ","{top:-15px;font-size:",";background-color:transparent;padding:0.2rem;transition:all 0.4s ease;}&::placeholder{color:transparent;}&:not(:placeholder-shown) ~ ","{top:-15px;font-size:0.85rem;padding:0.2rem;}&::-ms-reveal,::-ms-clear{display:none;}"],(param=>{let{$hasErro}=param;return $hasErro?_styles_variables__WEBPACK_IMPORTED_MODULE_0__.T.danger:_styles_variables__WEBPACK_IMPORTED_MODULE_0__.T.shadow}),_styles_variables__WEBPACK_IMPORTED_MODULE_0__.l.sizes.xxsmall,LabelInput,_styles_variables__WEBPACK_IMPORTED_MODULE_0__.l.sizes.xxxsmall,LabelInput)},"./src/components/forms/login/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,default:()=>stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),ButtonPrimary=__webpack_require__("./src/components/buttons/ButtonPrimary/index.tsx"),infoErro=__webpack_require__("./public/icons/infoErro.svg"),react=__webpack_require__("./node_modules/next-auth/react/index.js"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),navigation=__webpack_require__("./node_modules/@storybook/nextjs/dist/export-mocks/navigation/index.mjs"),compiled_react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),ErrorMessage=__webpack_require__("./src/components/forms/fields/ErrorMessage/index.tsx"),Input=__webpack_require__("./src/components/forms/fields/Input/index.tsx"),mediaQueries=__webpack_require__("./src/styles/mediaQueries.ts"),variables=__webpack_require__("./src/styles/variables.ts"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Form=styled_components_browser_esm.Ay.form.withConfig({componentId:"sc-6258095a-0"})(["display:flex;flex-direction:column;max-width:450px;width:100%;","{width:100%;}"],mediaQueries.A.tablet),InputWrapper=styled_components_browser_esm.Ay.div.withConfig({componentId:"sc-6258095a-1"})(["display:flex;flex-direction:column;gap:1.5rem;"]),ShowPassword=styled_components_browser_esm.Ay.span.withConfig({componentId:"sc-6258095a-2"})(["cursor:pointer;font-size:",";> img{position:relative;top:-4px;}"],variables.l.sizes.xxxsmall),CheckboxAndForgetPasswordWrapper=styled_components_browser_esm.Ay.div.withConfig({componentId:"sc-6258095a-3"})(["display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin:1rem 0;"]),CheckboxWrapper=styled_components_browser_esm.Ay.div.withConfig({componentId:"sc-6258095a-4"})(["display:flex;align-items:center;flex-direction:row-reverse;justify-content:start;gap:4px;> label{font-size:",";line-height:16px;letter-spacing:0.5px;text-align:left;cursor:pointer;}"],variables.l.sizes.xxxsmall),Checkbox=styled_components_browser_esm.Ay.input.withConfig({componentId:"sc-6258095a-5"})(["width:24px;height:24px;cursor:pointer;"]),ButtonWrapper=(styled_components_browser_esm.Ay.span.withConfig({componentId:"sc-6258095a-6"})(["font-size:",";line-height:1rem;letter-spacing:0.5px;text-align:left;text-decoration:none;color:",";"],variables.l.sizes.xxxsmall,variables.T.black),styled_components_browser_esm.Ay.div.withConfig({componentId:"sc-6258095a-7"})(["display:flex;flex-direction:column;gap:24px;margin-bottom:24px;margin-top:16px;","{flex-direction:row;}","{flex-direction:column;gap:16px;}"],mediaQueries.A.desktop,mediaQueries.A.tablet)),LinkNext=(0,styled_components_browser_esm.Ay)(link_default()).withConfig({componentId:"sc-6258095a-8"})(["font-size:",";line-height:16px;color:",";margin-left:4.8px;"],variables.l.sizes.xxxsmall,variables.T.black);function LoginForm(){var _errors_email,_errors_password;const[showPassword,setShowPassword]=(0,compiled_react.useState)(!1),[loading,setLoading]=(0,compiled_react.useState)(!1),router=(0,navigation.useRouter)(),[errosApi,setErrosApi]=(0,compiled_react.useState)(""),{register,handleSubmit,formState:{errors}}=(0,index_esm.mN)({mode:"onChange"});return(0,jsx_runtime.jsxs)(Form,{onSubmit:handleSubmit((async data=>{try{setLoading(!0);const response=await(0,react.signIn)("credentials",{...data,redirect:!1});if(!(null==response?void 0:response.ok))return void setErrosApi("Credenciais inválidas");router.replace("/dashboard")}finally{setLoading(!1)}})),children:[(0,jsx_runtime.jsxs)(InputWrapper,{children:[(0,jsx_runtime.jsx)(Input.A,{label:"E-mail",hasError:!!errors.email,type:"text",id:"E-mail",placeholder:"e-mail",errorMessage:null===(_errors_email=errors.email)||void 0===_errors_email?void 0:_errors_email.message,register:register("email",{required:"O campo e-mail é obrigatório",pattern:{value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,message:"preencha um e-mail válido"}})}),(0,jsx_runtime.jsx)(Input.A,{label:"Senha",type:showPassword?"text":"password",hasError:!!errors.password,id:"Password",placeholder:"senha",errorMessage:null===(_errors_password=errors.password)||void 0===_errors_password?void 0:_errors_password.message,register:register("password",{required:"O campo senha é obrigatório",pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*=])[a-zA-Z\d!@#$%&*=]{6,}$/,message:"A senha deve ter o mínimo de 6 caracteres e conter letras maiúsculas e minúsculas, números e símbolos como ! @ # $ % & * ="}}),children:(0,jsx_runtime.jsx)(ShowPassword,{onClick:()=>setShowPassword(!showPassword),children:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:errors.password&&!showPassword?(0,jsx_runtime.jsx)(next_image.A,{src:infoErro.A,alt:"icone de info erro"}):showPassword?"ESCONDER":"EXIBIR"})})})]}),(0,jsx_runtime.jsxs)(CheckboxAndForgetPasswordWrapper,{children:[(0,jsx_runtime.jsxs)(CheckboxWrapper,{children:[(0,jsx_runtime.jsx)("label",{htmlFor:"checkboxSignIn",children:"Lembrar meu acesso"}),(0,jsx_runtime.jsx)(Checkbox,{type:"checkbox",id:"checkboxSignIn",...register("remember"),role:"textbox"})]}),(0,jsx_runtime.jsx)(LinkNext,{href:"/forgot-password",children:"Esqueci minha senha"})]}),errosApi&&(0,jsx_runtime.jsx)(ErrorMessage.A,{children:errosApi}),(0,jsx_runtime.jsx)(ButtonWrapper,{children:(0,jsx_runtime.jsx)(ButtonPrimary.A,{disabled:loading,children:loading?"Carregando...":"Fazer login"})})]})}LoginForm.__docgenInfo={description:"",methods:[],displayName:"LoginForm"};const stories={title:"LoginForm",component:LoginForm},Template=()=>(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(LoginForm,{})});Template.parameters={backgrounds:{default:"white"}},Template.__docgenInfo={description:"",methods:[],displayName:"Template"}},"./src/styles/mediaQueries.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const customMediaQuery=maxWidth=>"@media (max-width: ".concat(maxWidth,"px)"),__WEBPACK_DEFAULT_EXPORT__={custom:customMediaQuery,desktop:customMediaQuery(904),tablet:customMediaQuery(680),mobile:customMediaQuery(500)}}}]);