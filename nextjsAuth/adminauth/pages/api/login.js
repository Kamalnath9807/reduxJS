const LoginPage = ({ posts }) => {
  return (
    <div>
      <h1>ALL members</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.name}</h1>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:5000/api/v1/member/getallmembers');
  const data = await res.json();

  return {
    props: { posts: data },
  };
};
