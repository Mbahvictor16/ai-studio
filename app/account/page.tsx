import { UserInfo } from "@/components/profile/user-info"
// import { ContentGallery } from "@/components/profile/content-gallery"
import { UsageStats } from "@/components/profile/usage-stats"
// import { RecentActivity } from "@/components/profile/recent-activity"
import { ProfileSettings } from "@/components/profile/profile-settings"

export default function ProfilePage() {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-sans mb-4 gradient-text">Your Profile</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Manage your AI generation journey and track your creative progress
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-8">
            <UserInfo />
            <UsageStats />
          </div>

          {/* Middle Column */}
          {/* <div className="lg:col-span-1 space-y-8">
            <ContentGallery />
          </div> */}

          {/* Right Column */}
          <div className="lg:col-span-1 space-y-8">
            {/* <RecentActivity /> */}
            <ProfileSettings />
          </div>
        </div>
      </div>
    </div>
  )
}
