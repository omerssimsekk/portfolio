import fs from 'fs';
import path from 'path';

export default function Home({ content }) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'index.html');
  const content = fs.readFileSync(filePath, 'utf8');
  
  return {
    props: {
      content,
    },
  };
}