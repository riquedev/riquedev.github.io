import {useColorMode, Link} from "@chakra-ui/react";
import {Img} from "@chakra-ui/image";

interface RepositoryProps {
    profile: string;
    repository: string;
}

export default function GitHubRepository(prop: RepositoryProps) {
    const {colorMode} = useColorMode()
    const theme = colorMode === "light" ? '' : 'tokyonight';
    const imageUrl = `https://github-readme-stats.vercel.app/api/pin/?username=${prop.profile}&repo=${prop.repository}&theme=${theme}`;
    const linkUrl = `https://github.com/${prop.profile}/${prop.repository}`;
    return (
        <Link href={linkUrl} target={"_blank"}>
            <Img alt={prop.repository} src={imageUrl} margin={"0 auto"}/>
        </Link>
    )
}
