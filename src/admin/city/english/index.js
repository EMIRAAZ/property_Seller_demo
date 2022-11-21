import AdminHeader from '../../../components/adminheader';
import Form from '../form';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from '../../../utils/axios';

export default function City() {
  let navigate = useNavigate();
  let location = useLocation();
  const getID = () => location.pathname.split('/').pop();
  const [form, setForm] = useState({ name: '', emirate: '' });

  useEffect(() => {
    if (getID() !== 'city') {
      getCityById();
    }
  }, []);

  const getCityById = async () => {
    const city = await axios.get(`/api/city/${getID()}`);
    const data = city.data?.data;
    setForm({
      name: data.name,
      emirate: data.emirate,
      id: data.id,
    });
  };

  const addCity = async () => {
    const city = await axios.post(`/api/city/${getID()}`);
    const data = city.data?.data;
    setForm({
      name: data.name,
      emirate: data.emirate,
      id: data.id,
    });
  };

  return (
    <div>
      <AdminHeader />
      <div className="container flex flex-col mt-5 mx-auto px-10">
        <span className="font-bold text-2xl">Add City</span>
        <span className="font-extralight text-slate-700 mt-1">
          Add cities according to emirate for easy selection.
        </span>
        <Form value={form} />
      </div>
    </div>
  );
}
