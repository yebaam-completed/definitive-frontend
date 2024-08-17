import React from 'react';

export const PostList: React.FC = () => {
  // Ejemplo de publicaciones
  const posts = [
    { id: 1, user: 'Flower Moreno', time: '12 h', content: 'hola' },
    { id: 2, user: 'Flower Moreno', time: '1 día', content: 'Publicación de ejemplo' }
  ];

  return (
    <div className="post-list">
      {posts.map(post => (
        <div key={post.id} className="post mb-4 p-3 bg-light rounded">
          <div className="d-flex align-items-center mb-2">
            <img src="https://via.placeholder.com/40" alt="User" className="rounded-circle me-2" />
            <div>
              <h6 className="mb-0">{post.user}</h6>
              <small className="text-muted">{post.time}</small>
            </div>
          </div>
          <p>{post.content}</p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-light"><i className="bi bi-hand-thumbs-up"></i> Me gusta</button>
            <button className="btn btn-light"><i className="bi bi-chat"></i> Comentar</button>
            <button className="btn btn-light"><i className="bi bi-share"></i> Enviar</button>
          </div>
        </div>
      ))}
    </div>
  );
};
