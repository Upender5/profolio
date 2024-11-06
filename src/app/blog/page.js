// import { useEffect, useState } from 'react';

// export default function BlogPost({ params }) {
//     const { slug } = params; // Get the slug from the URL
//     const [post, setPost] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchPost = async () => {
//             try {
//                 // Replace this URL with your API endpoint or local data fetching logic
//                 const response = await fetch(`/api/posts/${slug}`);
                
//                 if (!response.ok) {
//                     throw new Error('Post not found');
//                 }

//                 const data = await response.json();
//                 setPost(data);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchPost();
//     }, [slug]);

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     if (error) {
//         return <p>Error: {error}</p>;
//     }

//     return (
//         <div>
//             <h1>{post.title}</h1>
//             <p>{post.content}</p>
//         </div>
//     );
// }
