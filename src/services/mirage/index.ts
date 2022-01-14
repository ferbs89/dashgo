import { createServer, Factory, Model } from 'miragejs';

interface User {
	name: string;
	email: string;
	created_at: string;
}

export function makeServer() {
	const server = createServer({
		models: {
			user: Model.extend<Partial<User>>({}),
		},

		factories: {
			user: Factory.extend({
				name(i) {
					return `User ${i + 1}`;
				},
				email(i) {
					return `user${i + 1}@dashgo.com`;
				},
				createdAt() {
					return new Date();
				},
			}),
		},

		seeds(server) {
			server.createList('user', 10);
		},

		routes() {
			this.namespace = 'api';
			this.timing = 750;

			this.get('/users');
			this.post('/users');

			this.namespace = '';
			this.passthrough();
		},
	});

	return server;
}
