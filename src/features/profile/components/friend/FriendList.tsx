import React from 'react';
import { FriendCard } from './FriendCard';

export const FriendList: React.FC = () => {
  const friends = [
    { name: 'user1', mutualFriends: 7, imageSrc: 'https://images.unsplash.com/photo-1723653263152-f20aae931b99?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'user2', mutualFriends: 15, imageSrc: 'https://images.unsplash.com/photo-1723653263152-f20aae931b99?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'user3', mutualFriends: 18, imageSrc: 'https://images.unsplash.com/photo-1723653263152-f20aae931b99?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];

  return (
    <div>
      {friends.map((friend, index) => (
        <FriendCard key={index} name={friend.name} mutualFriends={friend.mutualFriends} imageSrc={friend.imageSrc} />
      ))}
    </div>
  );
};
