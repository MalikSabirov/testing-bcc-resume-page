import { FC, SVGAttributes } from "react"
import { AiFillFacebook, AiFillLinkedin, AiFillGithub } from "react-icons/ai"

type SocialNetwork = {
  name: string
  href: string
  icon: FC<SVGAttributes<SVGElement>>
}

export const SOCIAL_NETWORKS: SocialNetwork[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/malik-sabirov-a2492b155/",
    icon: AiFillLinkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/MalikSabirov",
    icon: AiFillGithub,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100009387431447",
    icon: AiFillFacebook,
  },
]
