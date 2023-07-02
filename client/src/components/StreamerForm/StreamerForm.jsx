import React from "react";
import { FormWrapper } from "./StreamerForm.styled";
import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import MenuItem from "@mui/material/MenuItem";

const StreamerForm = ({ streamers, setStreamers }) => {
  const platforms = [
    {
      value: "Twitch",
      label: "Twitch",
    },
    {
      value: "YouTube",
      label: "YouTube",
    },
    {
      value: "TikTok",
      label: "TikTok",
    },
    {
      value: "Kick",
      label: "Kick",
    },
    {
      value: "Rumble",
      label: "Rumble",
    },
  ];

  const form = useForm({
    defaultValues: {
      name: "",
      platform: platforms[0].value,
      description: "",
    },
  });
  const { register, handleSubmit, formState, reset } = form;
  const { errors } = formState;

  const onSubmit = async (streamerData) => {
    try {
      const response = await fetch("http://localhost:8080/streamers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(streamerData),
      });
      const data = await response.json();
      setStreamers([...streamers, data]);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <FormWrapper>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <h1>Add Streamer</h1>
          <TextField
            label="Streamer name"
            type="name"
            {...register("name", {
              required: "Streamer name is required",
            })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />

          <TextField
            select
            fullWidth
            defaultValue={platforms[0].value}
            label="Platform"
            inputProps={register("platform", {
              required: "Please select a platform",
            })}
            error={!!errors.platform}
            helperText={errors.platform?.message}
          >
            {platforms.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Description"
            type="description"
            {...register("description", {
              required: "Description is required",
            })}
            error={!!errors.description}
            helperText={errors.description?.message}
          />
          <Button type="submit" variant="contained" color="primary">
            Add
          </Button>
        </form>
      </FormWrapper>
    </>
  );
};

export default StreamerForm;
