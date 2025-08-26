"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Pill, Store, Eye, EyeOff, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function PharmacistLogin() {
  const [selectedLanguage, setSelectedLanguage] = useState("en")
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    pharmacyName: "",
    licenseNumber: "",
  })
  const router = useRouter()

  const languages = {
    en: {
      title: "Pharmacist Portal Login",
      subtitle: "Manage your pharmacy inventory and orders",
      name: "Full Name",
      email: "Email Address",
      password: "Password",
      pharmacyName: "Pharmacy Name",
      licenseNumber: "License Number",
      login: "Login to Portal",
      backToHome: "Back to Home",
      forgotPassword: "Forgot Password?",
      noAccount: "Don't have an account?",
      register: "Register Here",
    },
    hi: {
      title: "फार्मासिस्ट पोर्टल लॉगिन",
      subtitle: "अपनी फार्मेसी इन्वेंटरी और ऑर्डर का प्रबंधन करें",
      name: "पूरा नाम",
      email: "ईमेल पता",
      password: "पासवर्ड",
      pharmacyName: "फार्मेसी का नाम",
      licenseNumber: "लाइसेंस नंबर",
      login: "पोर्टल में लॉगिन करें",
      backToHome: "होम पर वापस",
      forgotPassword: "पासवर्ड भूल गए?",
      noAccount: "खाता नहीं है?",
      register: "यहाँ रजिस्टर करें",
    },
    pa: {
      title: "ਫਾਰਮਾਸਿਸਟ ਪੋਰਟਲ ਲਾਗਇਨ",
      subtitle: "ਆਪਣੀ ਫਾਰਮੇਸੀ ਇਨਵੈਂਟਰੀ ਅਤੇ ਆਰਡਰ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰੋ",
      name: "ਪੂਰਾ ਨਾਮ",
      email: "ਈਮੇਲ ਪਤਾ",
      password: "ਪਾਸਵਰਡ",
      pharmacyName: "ਫਾਰਮੇਸੀ ਦਾ ਨਾਮ",
      licenseNumber: "ਲਾਇਸੈਂਸ ਨੰਬਰ",
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
    if (formData.name && formData.email && formData.password && formData.pharmacyName) {
      localStorage.setItem("pharmacistData", JSON.stringify(formData))
      router.push("/pharmacist")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/5 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/pharmacy-medicine-bottles-pills-background.png')`,
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
            <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center">
              <Pill className="h-8 w-8 text-accent" />
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
                  placeholder="Rajesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white border-border focus:border-accent"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="pharmacyName" className="text-sm font-medium text-foreground">
                  {currentLang.pharmacyName}
                </Label>
                <Input
                  id="pharmacyName"
                  type="text"
                  placeholder="Kumar Medical Store"
                  value={formData.pharmacyName}
                  onChange={(e) => setFormData({ ...formData, pharmacyName: e.target.value })}
                  className="bg-white border-border focus:border-accent"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="licenseNumber" className="text-sm font-medium text-foreground">
                  {currentLang.licenseNumber}
                </Label>
                <Input
                  id="licenseNumber"
                  type="text"
                  placeholder="PB/12345/2024"
                  value={formData.licenseNumber}
                  onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
                  className="bg-white border-border focus:border-accent"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  {currentLang.email}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="pharmacist@ayunet.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white border-border focus:border-accent"
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
                    className="bg-white border-border focus:border-accent pr-10"
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
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 text-lg font-medium"
              >
                <Store className="mr-2 h-5 w-5" />
                {currentLang.login}
              </Button>
            </form>

            <div className="text-center space-y-2">
              <Link href="#" className="text-sm text-accent hover:text-accent/80">
                {currentLang.forgotPassword}
              </Link>
              <p className="text-sm text-muted-foreground">
                {currentLang.noAccount}{" "}
                <Link href="#" className="text-accent hover:text-accent/80 font-medium">
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
