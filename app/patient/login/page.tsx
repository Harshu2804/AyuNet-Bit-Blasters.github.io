"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, User, Eye, EyeOff, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function PatientLogin() {
  const [selectedLanguage, setSelectedLanguage] = useState("en")
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    age: "",
  })
  const router = useRouter()

  const languages = {
    en: {
      title: "Patient Portal Login",
      subtitle: "Access your health records and appointments",
      name: "Full Name",
      email: "Email Address",
      password: "Password",
      phone: "Phone Number",
      age: "Age",
      login: "Login to Portal",
      backToHome: "Back to Home",
      forgotPassword: "Forgot Password?",
      noAccount: "Don't have an account?",
      register: "Register Here",
    },
    hi: {
      title: "मरीज़ पोर्टल लॉगिन",
      subtitle: "अपने स्वास्थ्य रिकॉर्ड और अपॉइंटमेंट तक पहुंचें",
      name: "पूरा नाम",
      email: "ईमेल पता",
      password: "पासवर्ड",
      phone: "फोन नंबर",
      age: "उम्र",
      login: "पोर्टल में लॉगिन करें",
      backToHome: "होम पर वापस",
      forgotPassword: "पासवर्ड भूल गए?",
      noAccount: "खाता नहीं है?",
      register: "यहाँ रजिस्टर करें",
    },
    pa: {
      title: "ਮਰੀਜ਼ ਪੋਰਟਲ ਲਾਗਇਨ",
      subtitle: "ਆਪਣੇ ਸਿਹਤ ਰਿਕਾਰਡ ਅਤੇ ਮੁਲਾਕਾਤਾਂ ਤੱਕ ਪਹੁੰਚ ਕਰੋ",
      name: "ਪੂਰਾ ਨਾਮ",
      email: "ਈਮੇਲ ਪਤਾ",
      password: "ਪਾਸਵਰਡ",
      phone: "ਫੋਨ ਨੰਬਰ",
      age: "ਉਮਰ",
      login: "ਪੋਰਟਲ ਵਿੱਚ ਲਾਗਇਨ ਕਰੋ",
      backToHome: "ਘਰ ਵਾਪਸ",
      forgotPassword: "ਪਾਸਵਰਡ ਭੁੱਲ ਗਏ?",
      noAccount: "ਖਾਤਾ ਨਹੀਂ ਹੈ?",
      register: "ਇੱਥੇ ਰਜਿਸਟਰ ਕਰੋ",
    },
  }

  const currentLang = languages[selectedLanguage as keyof typeof languages]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.password) {
      localStorage.setItem("patientData", JSON.stringify(formData))
      router.push("/patient")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-secondary/5 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/patient-healthcare-wellness-background.png')`,
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
            <div className="mx-auto mb-4 p-3 bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center">
              <Heart className="h-8 w-8 text-secondary" />
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
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white border-border focus:border-secondary"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                    {currentLang.phone}
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-white border-border focus:border-secondary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="age" className="text-sm font-medium text-foreground">
                    {currentLang.age}
                  </Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="25"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="bg-white border-border focus:border-secondary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  {currentLang.email}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="patient@ayunet.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white border-border focus:border-secondary"
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
                    className="bg-white border-border focus:border-secondary pr-10"
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
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-6 text-lg font-medium"
              >
                <User className="mr-2 h-5 w-5" />
                {currentLang.login}
              </Button>
            </form>

            <div className="text-center space-y-2">
              <Link href="#" className="text-sm text-secondary hover:text-secondary/80">
                {currentLang.forgotPassword}
              </Link>
              <p className="text-sm text-muted-foreground">
                {currentLang.noAccount}{" "}
                <Link href="#" className="text-secondary hover:text-secondary/80 font-medium">
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
