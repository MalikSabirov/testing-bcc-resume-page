import { SOCIAL_NETWORKS } from "@shared/constants/social-networks"
import { FC } from "react"
import { Link } from "react-router-dom"

type Props = {
  className?: string
  iconClassName?: string
}

export const SocialNetworks: FC<Props> = ({ className, iconClassName }) => {
  return (
    <ul className={className}>
      {SOCIAL_NETWORKS.map((socialNetwork) => {
        const Icon = socialNetwork.icon

        return (
          <li key={socialNetwork.name}>
            <Link
              target="_blank"
              title={socialNetwork.name}
              to={socialNetwork.href}
            >
              <Icon className={iconClassName} />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
