export default function handler(req, res) {
  res.status(200).json({ 
    name: 'Ömer Faruk Şimşek',
    title: 'Computer Science Student',
    skills: [
      'JavaScript',
      'React',
      'Next.js',
      'Node.js',
      'Express.js'
    ],
    message: 'Thank you for checking out my portfolio template!'
  });
} 