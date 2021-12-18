import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
	showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
	return (
		<Flex align="center">
			{showProfileData && (
				<Box mr="4" textAlign="right">
					<Text>Fernando Sanches</Text>
					<Text color="gray.300" fontSize="small">ferbs89@gmail.com</Text>
				</Box>
			)}

			<Avatar size="md" name="Fernando Sanches" src="https://github.com/ferbs89.png" />
		</Flex>
	);
}
