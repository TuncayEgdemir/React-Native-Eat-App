import sanityClient from '@sanity/client'
import imageBuilder from '@sanity/image-url'

const client = sanityClient({
    projectId: 'ry6779qs',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2024-03-08'
})

const builder = imageBuilder(client)

export const urlFor = (source) => {
    return builder.image(source)
}

export default client;