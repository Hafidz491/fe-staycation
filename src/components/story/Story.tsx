import foto from "../../assets/img/foto_keluarga.jpg";

export const Story = () => {
  return (
    <div className="flex justify-center">
      <div className="">
        <img src={foto} alt="" />
      </div>
      <div>
        <h1>Story Teller</h1>
      </div>
    </div>
  );
};
