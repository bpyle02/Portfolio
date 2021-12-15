import client from "@sanity/client"

export default client({
    projectId: "n5mqzbhc",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-12-15",
})