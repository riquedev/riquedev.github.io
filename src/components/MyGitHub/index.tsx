import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Stack
} from '@chakra-ui/react';
import Translator from "../i18n/Translator";
import {CONFIG} from "../../config";
import GitHubStats from "../GitHubStats";
import GitHubRepository from "../GitHubRepository";


export default function MyGitHub() {
    const {gitHubProfile, gitHubRepositories} = CONFIG;
    return (
        <Box p={4} py={{base: 10, md: 26}} mt={20}>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={'3xl'}><Translator path={"home.mygithub"}/></Heading>
            </Stack>
            <Container maxW={'max'} mt={10}>
                <SimpleGrid columns={{base: 1}} alignSelf={'center'}>
                    <GitHubStats profile={gitHubProfile}/>
                </SimpleGrid>
                <SimpleGrid columns={{base: 1, md: 2, lg: 4}} marginTop={4} spacing={4}>
                    {gitHubRepositories.map((repository) => (<GitHubRepository key={repository} profile={gitHubProfile}
                                                                               repository={repository}/>))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}
