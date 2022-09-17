import {
    Box,
    Heading,
    Container,
    Text,
    Stack,
} from '@chakra-ui/react';
import Translator from "../i18n/Translator";

export default function Hero() {
    return (
        <>
            <Container maxW={'3xl'}>
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{base: 8, md: 14}}
                    py={{base: 20, md: 36}}>
                    <Heading
                        fontWeight={600}
                        fontSize={{base: '2xl', sm: '4xl', md: '6xl'}}
                        lineHeight={'110%'}>
                        <Translator path={"home.welcome"}/> <br/>
                        <Text as={'span'} color={'purple.400'}>
                            <Translator path={"home.toMyProfile"}/>
                        </Text>
                    </Heading>
                    <Text color={'gray.500'} textAlign={"justify"}>
                        <Translator path={"home.about"}/>
                    </Text>
                </Stack>
            </Container>
        </>
    );
}
