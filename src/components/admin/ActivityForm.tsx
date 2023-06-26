'use client';
import { Button, TextField, styled } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import React from 'react';

const CssTextField = styled(TextField)({
  '& label': {
    color: '#A0AAB4',
    fontSize: '18px',
    fontWeight: 900,
  },
  '& label.Mui-focused': {
    color: '#A0AAB4',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ffffff2f',
    },
    '&:hover fieldset': {
      borderColor: '#ffffff5b',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#efe636',
    },
  },
});

const ActivityForm = () => {
  const [activityExpiryDate, setActivityExpiryDate] =
    React.useState<Dayjs | null>(dayjs('03/03/2023'));
  return (
    <form className="flex flex-col w-[90%] md:w-[60%] gap-[20px]">
      <input
        type="text"
        name="activity_name"
        id="activity_name"
        placeholder="📝 Enter the activity name"
        className="admin-activity-form_text"
      />
      <textarea
        name="activity_desc"
        id="activity_desc"
        cols={30}
        rows={10}
        placeholder="📝 Enter the activity description"
        className="admin-activity-form_textarea"
      />

      <input
        type="number"
        name="terns_reward"
        id="terns_reward"
        min={0}
        minLength={0}
        placeholder="̧📝 Enter the Terns will be rewarded"
        className="admin-activity-form_text"
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
        className="bg-app-1 text-black/80 hover:text-white"
      >
        Create Activity
      </Button>
    </form>
  );
};

export default ActivityForm;
