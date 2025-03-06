const ProfileCard = ({ name, jobTitle, company, bio, skills, imageUrl }) => {
  return (
    <div className="p-4 border border-gray-300 rounded shadow-lg m-4 w-80">
      <img className="object-" src={imageUrl} alt="profile" />
      <hr className="m-2 border-gray-200 " />

      <h1 className="text-green-500 text-lg">{name}</h1>
      <h2 className=" text-gray-600">
        {jobTitle} at {company}
      </h2>
      <p className="my-2 text-sm text-gray-400">{bio}</p>
      <h3 className="bg-green-300 text-center">Skills</h3>
      <ul className="flex mt-1">
        {skills.map((skill) => (
          <li className="px-1 text-green-800">{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileCard;
