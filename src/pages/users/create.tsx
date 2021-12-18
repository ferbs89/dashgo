import Link from 'next/link';
import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react';

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Input } from '../../components/Form/Input';

export default function UserCreate() {
	return (
		<Box>
			<Header />

			<Flex w="100%" maxWidth={1480} my="6" mx="auto" px="6">
				<Sidebar />

				<Box flex="1" borderRadius={8} bg="gray.800" p={[6, 8]}>
					<Heading size="lg" fontWeight="normal">Criar usuário</Heading>

					<Divider my="6" borderColor="gray.700" />

					<VStack spacing={[6, 8]}>
						<SimpleGrid minChildWidth="240px" spacing={[6, 8]} width="100%">
							<Input type="text" name="name" label="Nome completo" />
							<Input type="email" name="email" label="E-mail" />
						</SimpleGrid>

						<SimpleGrid minChildWidth="240px" spacing={[6, 8]} width="100%">
							<Input type="password" name="password" label="Senha" />
							<Input type="password" name="password_confirmation" label="Confirmação da senha" />
						</SimpleGrid>
					</VStack>

					<Flex mt={[6, 8]} justify="flex-end">
						<HStack spacing="4">
							<Link href="/users" passHref>
								<Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
							</Link>

							<Button colorScheme="pink">Salvar</Button>
						</HStack>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
}
