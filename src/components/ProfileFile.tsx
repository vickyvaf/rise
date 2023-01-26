interface Props {
  handleShowFile: () => void;
}

const ProfileFile = (props: Props) => {
  return (
    <div className="contact-file-container">
      <header>
        <div className="action">
          <button
            onClick={props.handleShowFile}
            className="button-one"
          ></button>
          <button className="button-two"></button>
          <button className="button-three"></button>
        </div>
        <span>Profile</span>
      </header>
      <div className="card-profile">
        <img src="/assets/profile.png" className="profile" alt="profile" />
        <h2>Vicky Adi Firmansyah</h2>
        <div>
          <p>Frontend Engineer</p>
          <img src="/assets/react.png" alt="" />
        </div>
        <div className="p">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minus
            voluptates velit exercitationem magnam mollitia dolorum doloribus
            dignissimos eveniet temporibus alias inventore porro distinctio eum
            harum nam, quos in aliquam sequi numquam ad delectus? Blanditiis
            accusantium perspiciatis mollitia sint similique obcaecati
            laboriosam veritatis ducimus modi, fugiat eos quam minima.
            Asperiores.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minus
            voluptates velit exercitationem magnam mollitia dolorum doloribus
            dignissimos eveniet temporibus alias inventore porro distinctio eum
            harum nam, quos in aliquam sequi numquam ad delectus? Blanditiis
            accusantium perspiciatis mollitia sint similique obcaecati
            laboriosam veritatis ducimus modi, fugiat eos quam minima.
            Asperiores.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileFile;
