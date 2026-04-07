import HeroSection from '@/components/sections/home/HeroSection'
import StatsSection from '@/components/sections/home/StatsSection'
import IPPreviewSection from '@/components/sections/home/IPPreviewSection'
import CapabilitiesPreview from '@/components/sections/home/CapabilitiesPreview'
import CTABanner from '@/components/sections/home/CTABanner'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <IPPreviewSection />
      <CapabilitiesPreview />
      <CTABanner />
    </>
  )
}
