import {useColorMode, Link} from "@chakra-ui/react";
import {Img} from "@chakra-ui/image";

interface StatsProps {
    profile: string;
}

export default function GitHubStats(prop: StatsProps) {
    const {colorMode} = useColorMode()
    const theme = colorMode === "light" ? '' : 'tokyonight';
    const imageUrl = `https://github-readme-stats.vercel.app/api?username=${prop.profile}&show_icons=true&count_private=true&theme=${theme}`;
    const linkUrl = `https://github.com/${prop.profile}`;
    return (
        <Link href={linkUrl} target={"_blank"} margin={'0 auto'}>
            <Img alt={prop.profile} src={imageUrl} />
        </Link>
    )
}
