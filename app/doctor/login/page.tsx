"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Stethoscope, Eye, EyeOff, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function DoctorLogin() {
  const [selectedLanguage, setSelectedLanguage] = useState("en")
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    specialization: "",
  })
  const router = useRouter()

  const languages = {
    en: {
      title: "Doctor Portal Login",
      subtitle: "Access your medical practice dashboard",
      name: "Full Name",
      email: "Email Address",
      password: "Password",
      specialization: "Specialization",
      login: "Login to Portal",
      backToHome: "Back to Home",
      forgotPassword: "Forgot Password?",
      noAccount: "Don't have an account?",
      register: "Register Here",
      selectSpecialization: "Select your specialization",
      generalPhysician: "General Physician",
      cardiologist: "Cardiologist",
      pediatrician: "Pediatrician",
      gynecologist: "Gynecologist",
      orthopedic: "Orthopedic",
      dermatologist: "Dermatologist",
    },
    hi: {
      title: "डॉक्टर पोर्टल लॉगिन",
      subtitle: "अपने मेडिकल प्रैक्टिस डैशबोर्ड तक पहुंचें",
      name: "पूरा नाम",
      email: "ईमेल पता",
      password: "पासवर्ड",
      specialization: "विशेषज्ञता",
      login: "पोर्टल में लॉगिन करें",
      backToHome: "होम पर वापस",
      forgotPassword: "पासवर्ड भूल गए?",
      noAccount: "खाता नहीं है?",
      register: "यहाँ रजिस्टर करें",
      selectSpecialization: "अपनी विशेषज्ञता चुनें",
      generalPhysician: "सामान्य चिकित्सक",
      cardiologist: "हृदय रोग विशेषज्ञ",
      pediatrician: "बाल रोग विशेषज्ञ",
      gynecologist: "स्त्री रोग विशेषज्ञ",
      orthopedic: "हड्डी रोग विशेषज्ञ",
      dermatologist: "त्वचा रोग विशेषज्ञ",
    },
    pa: {
      title: "ਡਾਕਟਰ ਪੋਰਟਲ ਲਾਗਇਨ",
      subtitle: "ਆਪਣੇ ਮੈਡੀਕਲ ਪ੍ਰੈਕਟਿਸ ਡੈਸ਼ਬੋਰਡ ਤੱਕ ਪਹੁੰਚ ਕਰੋ",
      name: "ਪੂਰਾ ਨਾਮ",
      email: "ਈਮੇਲ ਪਤਾ",
      password: "ਪਾਸਵਰਡ",
      specialization: "ਵਿਸ਼ੇਸ਼ਤਾ",
      login: "ਪੋਰਟਲ ਵਿੱਚ ਲਾਗਇਨ ਕਰੋ",
      backToHome: "ਘਰ ਵਾਪਸ",
      forgotPassword: "ਪਾਸਵਰਡ ਭੁੱਲ ਗਏ?",
      noAccount: "ਖਾਤਾ ਨਹੀਂ ਹੈ?",
      register: "ਇੱਥੇ ਰਜਿਸਟਰ ਕਰੋ",
      selectSpecialization: "ਆਪਣੀ ਵਿਸ਼ੇਸ਼ਤਾ ਚੁਣੋ",
      generalPhysician: "ਜਨਰਲ ਡਾਕਟਰ",
      cardiologist: "ਦਿਲ ਦੇ ਡਾਕਟਰ",
      pediatrician: "ਬੱਚਿਆਂ ਦੇ ਡਾਕਟਰ",
      gynecologist: "ਔਰਤਾਂ ਦੇ ਡਾਕਟਰ",
      orthopedic: "ਹੱਡੀਆਂ ਦੇ ਡਾਕਟਰ",
      dermatologist: "ਚਮੜੀ ਦੇ ਡਾਕਟਰ",
    },
  }

  const currentLang = languages[selectedLanguage as keyof typeof languages]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.password && formData.specialization) {
      localStorage.setItem("doctorData", JSON.stringify(formData))
      router.push("/doctor")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/5 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/doctor-consultation-medical-equipment-background.png')`,
        }}
      />

      <div className="w-full max-w-md relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {currentLang.backToHome}
            </Button>
          </Link>
          <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
            <SelectTrigger className="w-32 bg-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="hi">हिंदी</SelectItem>
              <SelectItem value="pa">ਪੰਜਾਬੀ</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-2 border-border">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">{currentLang.title}</CardTitle>
            <CardDescription className="text-muted-foreground">{currentLang.subtitle}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-foreground">
                  {currentLang.name}
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Dr. John Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white border-border focus:border-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialization" className="text-sm font-medium text-foreground">
                  {currentLang.specialization}
                </Label>
                <Select
                  value={formData.specialization}
                  onValueChange={(value) => setFormData({ ...formData, specialization: value })}
                >
                  <SelectTrigger className="bg-white border-border focus:border-primary">
                    <SelectValue placeholder={currentLang.selectSpecialization} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">{currentLang.generalPhysician}</SelectItem>
                    <SelectItem value="cardiology">{currentLang.cardiologist}</SelectItem>
                    <SelectItem value="pediatrics">{currentLang.pediatrician}</SelectItem>
                    <SelectItem value="gynecology">{currentLang.gynecologist}</SelectItem>
                    <SelectItem value="orthopedics">{currentLang.orthopedic}</SelectItem>
                    <SelectItem value="dermatology">{currentLang.dermatologist}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  {currentLang.email}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="doctor@ayunet.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white border-border focus:border-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-foreground">
                  {currentLang.password}
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="bg-white border-border focus:border-primary pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-medium"
              >
                <Stethoscope className="mr-2 h-5 w-5" />
                {currentLang.login}
              </Button>
            </form>

            <div className="text-center space-y-2">
              <Link href="#" className="text-sm text-primary hover:text-primary/80">
                {currentLang.forgotPassword}
              </Link>
              <p className="text-sm text-muted-foreground">
                {currentLang.noAccount}{" "}
                <Link href="#" className="text-primary hover:text-primary/80 font-medium">
                  {currentLang.register}
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
