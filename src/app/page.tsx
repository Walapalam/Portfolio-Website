import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { AchievementCard } from "@/components/achievement-card";
import { SkillCategory } from "@/components/skill-category";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { Icons } from "@/components/icons";
import { GithubStats } from "@/components/github-stats";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      {/* About Section */}
      <section id="about" className="mx-auto w-full max-w-2xl py-8">
        <BlurFade delay={BLUR_FADE_DELAY * 1}>
          <Markdown className="prose max-w-full text-center text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>

      {/* Hero Section */}
      <section id="hero" className="relative">
        <div className="mx-auto w-full max-w-3xl space-y-8 pb-12">
          <div className="gap-6 flex justify-between items-center">
            <div className="flex-col flex flex-1 space-y-4">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <p className="text-lg md:text-xl text-muted-foreground max-w-[600px]">
                  {DATA.description}
                </p>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <p className="text-base md:text-lg text-muted-foreground/80">
                  {DATA.description2}
                </p>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <p className="text-sm md:text-base font-medium text-primary/80">
                  {DATA.description3}
                </p>
              </BlurFade>

              {/* Social links */}
              <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <div className="flex gap-3 pt-4">
                  {Object.entries(DATA.contact.social)
                    .filter(([_, social]) => social.navbar)
                    .map(([name, social]) => (
                      <Link
                        key={name}
                        href={social.url}
                        target="_blank"
                        className="inline-flex items-center justify-center rounded-lg w-10 h-10 border border-input bg-background/80 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110 hover:glow-sm"
                      >
                        <social.icon className="h-5 w-5" />
                      </Link>
                    ))}
                </div>
              </BlurFade>
            </div>

            {/* Avatar */}
            <BlurFade delay={BLUR_FADE_DELAY * 2}>
              <Avatar className="size-32 md:size-40 border-4 border-background shadow-2xl">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* GitHub Stats Section */}
      <GithubStats />

      {/* Achievements Section */}
      <section id="achievements" className="py-8">
        <div className="mx-auto w-full max-w-4xl">
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="inline-block rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 px-4 py-1.5 text-sm font-semibold text-black">
                🏆 Achievements
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Award-Winning Work
              </h2>
              <p className="text-muted-foreground max-w-[600px]">
                Recognition from hackathons and tech competitions across Sri Lanka
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {DATA.achievements.map((achievement, index) => (
              <AchievementCard
                key={achievement.event}
                title={achievement.title}
                event={achievement.event}
                description={achievement.description}
                date={achievement.date}
                icon={achievement.icon}
                color={achievement.color}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Categorized */}
      <section id="skills" className="mx-auto w-full max-w-3xl">
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <h2 className="text-xl font-bold mb-6">Skills</h2>
        </BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {DATA.skillCategories.map((category, id) => (
            <BlurFade key={category.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
              <SkillCategory
                name={category.name}
                icon={category.icon}
                skills={category.skills}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="work" className="mx-auto w-full max-w-2xl">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <h2 className="text-xl font-bold">Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 11 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="mx-auto w-full max-w-2xl">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 13 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
                description={education.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Certifications (Subtle) */}
      <section id="certifications" className="mx-auto w-full max-w-2xl py-4">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className="border rounded-xl p-4 bg-muted/30">
            <h3 className="text-sm font-medium mb-3 text-muted-foreground uppercase tracking-wider">Certifications & Licenses</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Google Data Analytics Professional Certificate",
                "DeepLearning.AI TensorFlow Developer",
                "AWS Certified Cloud Practitioner",
                "Scrum Master Accredited Certification"
              ].map((cert) => (
                <Badge key={cert} variant="secondary" className="font-normal text-xs">{cert}</Badge>
              ))}
            </div>
          </div>
        </BlurFade>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From AI-powered accessibility tools to real-time ticketing systems,
                  here are some projects I&apos;m proud of.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 16 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact">
        <div className="relative grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-16">

          <BlurFade delay={BLUR_FADE_DELAY * 18}>
            <div className="space-y-4">
              <div className="inline-block rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1.5 text-sm font-semibold text-white">
                ✉️ Let&apos;s Connect
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Whether you have a project idea, want to collaborate, or just want to say hi —
                I&apos;d love to hear from you!
              </p>

              <div className="flex items-center justify-center gap-4 pt-6">
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105"
                >
                  <Icons.linkedin className="h-4 w-4" />
                  LinkedIn
                </Link>
                <Link
                  href={`mailto:${DATA.contact.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-input bg-background px-6 py-3 text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition-all hover:scale-105"
                >
                  <Icons.email className="h-4 w-4" />
                  Email
                </Link>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main >
  );
}
