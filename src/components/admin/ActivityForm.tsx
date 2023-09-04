'use client';
import { axiosClient } from '@/utils/axiosInstance';
import { Button, CircularProgress, TextField, styled } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

// const CssTextField = styled(TextField)({
//   '& label': {
//     color: '#A0AAB4',
//     fontSize: '18px',
//     fontWeight: 900,
//   },
//   '& label.Mui-focused': {
//     color: '#A0AAB4',
//   },
//   '& .MuiInput-underline:after': {
//     borderBottomColor: '#B2BAC2',
//   },
//   '& .MuiOutlinedInput-root': {
//     '& fieldset': {
//       borderColor: '#ffffff2f',
//     },
//     '&:hover fieldset': {
//       borderColor: '#ffffff5b',
//     },
//     '&.Mui-focused fieldset': {
//       borderColor: '#efe636',
//     },
//   },
// });

const ActivityForm = ({ themeMode }: { themeMode: boolean }) => {
  const [state, setState] = useState({
    activity_link: '',
    activity_desc: '',
    terns_reward: 0,
    tiks_reward: 0,
  });
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [activityExpiryDate, setActivityExpiryDate] =
    React.useState<Dayjs | null>(dayjs('03/03/2023'));

  // handle change on input fields
  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value });
  };

  // handle submit and hit activity creation api
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsUploading(true);
    const token = localStorage.getItem('token');
    console.log('CLIENT STATE:: ', state);

    try {
      //
      const data = {
        activity_name: state.activity_link,
        activity_desc: state.activity_desc,
        activity_expiry: activityExpiryDate,
        terns_reward: state.terns_reward,
        tiks_reward: state.tiks_reward,
      };
      const res = await axiosClient.post('/activity', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res) {
        toast.success('Activity has been successfully created...', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      }
      setIsUploading(false);
    } catch (error) {
      console.log('Error in creating activity!');
    }
  };

  return (
    <form
      className={`flex flex-col w-[90%] md:w-[60%] gap-[20px] ${
        themeMode ? 'text-black' : 'text-white'
      }`}
      onSubmit={handleSubmit}
    >
      <ToastContainer />
      <textarea
        name="activity_desc"
        id="activity_desc"
        cols={30}
        rows={10}
        placeholder="📝 Enter the activity description"
        className={`admin-activity-form_textarea ${
          themeMode ? 'text-black' : 'text-white'
        }`}
        onChange={handleOnChange}
      />
      <input
        type="text"
        name="activity_link"
        id="activity_link"
        placeholder="📝 Enter the activity link"
        className={`admin-activity-form_textarea ${
          themeMode ? 'text-black' : 'text-white'
        }`}
        onChange={handleOnChange}
      />
      <input
        type="number"
        name="terns_reward"
        id="terns_reward"
        min={0}
        minLength={0}
        placeholder="̧📝 Enter the Terns will be rewarded"
        className={`admin-activity-form_textarea ${
          themeMode ? 'text-black' : 'text-white'
        }`}
        onChange={handleOnChange}
      />
      <input
        type="number"
        name="tiks_reward"
        id="tiks_reward"
        min={0}
        minLength={0}
        placeholder="Enter the Tiks will be rewarded"
        className={`admin-activity-form_textarea ${
          themeMode ? 'text-black' : 'text-white'
        }`}
        onChange={handleOnChange}
      />
      <div className="bg-white p-[10px] pt-[15px] rounded-[14px]">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Activity Expiry Date"
            slotProps={{
              textField: {
                helperText: 'MM/DD/YYYY',
              },
            }}
            value={activityExpiryDate}
            onChange={(newValue) => setActivityExpiryDate(newValue)}
            className="w-full"
          />
        </LocalizationProvider>
      </div>
      <Button
        type="submit"
        variant="contained"
        disabled={isUploading}
        className="bg-app-1 text-black/80 hover:text-white"
      >
        {isUploading ? <CircularProgress /> : 'Create Activity'}
      </Button>
    </form>
  );
};

export default ActivityForm;
