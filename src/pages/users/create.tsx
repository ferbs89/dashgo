import Link from 'next/link';
import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Input } from '../../components/Form/Input';

interface UserCreateFormData {
	name: string;
	email: string;
	password: string;
	password_confirmation: string;
}

const userCreateFormSchema = yup.object().shape({
	name: yup.string().required('Nome obrigatório'),
	email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
	password: yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 caracteres'),
	password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais'),
});

export default function UserCreate() {
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(userCreateFormSchema),
	});

	const { errors } = formState;

	const handleUserCreate: SubmitHandler<UserCreateFormData> = async (data) => {
		await new Promise(resolve => setTimeout(resolve, 2000));
		console.log(data);
	}

	return (
		<Box>
			<Header />

			<Flex w="100%" maxWidth={1480} my="6" mx="auto" px="6">
				<Sidebar />

				<Box as="form" onSubmit={handleSubmit(handleUserCreate)} flex="1" borderRadius={8} bg="gray.800" p={[6, 8]}>
					<Heading size="lg" fontWeight="normal">Criar usuário</Heading>

					<Divider my="6" borderColor="gray.700" />

					<VStack spacing={[6, 8]}>
						<SimpleGrid minChildWidth="240px" spacing={[6, 8]} width="100%">
							<Input type="text" name="name" label="Nome completo" error={errors.name} {...register('name')} />
							<Input type="email" name="email" label="E-mail" error={errors.email} {...register('email')} />
						</SimpleGrid>

						<SimpleGrid minChildWidth="240px" spacing={[6, 8]} width="100%">
							<Input type="password" name="password" label="Senha" error={errors.password} {...register('password')} />
							<Input type="password" name="password_confirmation" label="Confirmação da senha" error={errors.password_confirmation} {...register('password_confirmation')} />
						</SimpleGrid>
					</VStack>

					<Flex mt={[6, 8]} justify="flex-end">
						<HStack spacing="4">
							<Link href="/users" passHref>
								<Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
							</Link>

							<Button type="submit" colorScheme="pink" isLoading={formState.isSubmitting}>Salvar</Button>
						</HStack>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
}
