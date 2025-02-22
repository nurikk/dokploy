import {
	type DomainSchema,
	type Schema,
	type Template,
	generateRandomDomain,
} from "../utils";

export function generate(schema: Schema): Template {
	const webDomain = generateRandomDomain(schema);
	const grpcDomain = generateRandomDomain(schema);
	const domains: DomainSchema[] = [
		{
			host: webDomain,
			port: 80,
			serviceName: "caddy",
		},

		{
			host: grpcDomain,
			port: 7070,
			serviceName: "engine",
		},
	];

	const envs = [
		`SERVER_URL=${webDomain}`,
		`SERVER_GRPC_BROADCAST_ADDRESS=${grpcDomain}`,
	];
	return {
		domains,
		envs
	};
}
