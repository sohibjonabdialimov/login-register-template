import React, { useState } from "react";
import Table from "../components/Table";
import { Modal } from "antd";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addUserFunction = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    console.log("ok");
  };
  return (
    <>
      <Table setIsModalOpen={setIsModalOpen} />
      <Modal
        title="Все водители"
        open={isModalOpen}
        onOk={() => {
          setIsModalOpen(false);
        }}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        footer={null}
      >
        <form onSubmit={(e) => addUserFunction(e)}>
          <div className="flex flex-col mb-4">
            <label className="text-xs font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              placeholder="Введите города"
              className="border w-[100%] p-3 rounded"
              id="name"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-xs font-medium mb-2" htmlFor="job">
              Job
            </label>
            <input
              placeholder="Введите сумма вне города"
              className="border w-[100%] p-3 rounded"
              id="job"
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 w-[100px] ml-auto flex items-center justify-center px-3 py-2 rounded-lg text-white"
          >
            Add user
          </button>
        </form>
      </Modal>
    </>
  );
};

export default Home;
