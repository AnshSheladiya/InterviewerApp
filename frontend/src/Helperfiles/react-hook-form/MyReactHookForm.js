// MyForm.js
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import TitleComponent from '../styled-components/TitleComponent';

const MyReactHookForm = () => {
  const { handleSubmit, control, register, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
    <TitleComponent>ReactHookForm Demo</TitleComponent>
      <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100%',
        backgroundColor: '#EEF296', // Background color
        borderRadius: '10px',      // Border radius
        padding: '20px',           // Padding
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Box shadow
        width: '300px',            // Width of the form
        margin: 'auto',            // Center horizontally
        marginTop: '10%', 
      }}
    >
      <div style={{ marginBottom: '16px' }}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Name is required' })}
          style={{ width: '100%', padding: '8px', margin: '4px 0', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label htmlFor="email">Email:</label>
        <Controller
          render={({ field }) => <input {...field} style={{ width: '100%', padding: '8px', margin: '4px 0', borderRadius: '4px', border: '1px solid #ccc' }} />}
          name="email"
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address',
            },
          }}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
      </div>

      <button type="submit" style={{ padding: '8px', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}>
        Submit
      </button>
    </form>
    </>
  
  );
};

export default MyReactHookForm;
