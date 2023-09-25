import ProfileService from "@/services/ProfileService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type ReqProfileBody = {
    firstName: string;
    birthday: string;
    sex: string;
    height: number | null;
    weight: number | null;
    bodyBuild: string;
    eyeColor: string;
    aboutMe: string;
    interests: Array<string>;
    character: string;
    familyStatus: string;
    orientation: string;
    looking: Array<string>;
    qualities: Array<string>;
    partnerDesc: string;
}

export const reqCreateProfile = createAsyncThunk('profile/create', async (formData: ReqProfileBody) => {
    const response = await ProfileService.create(formData);
    return response.data;
});

export const reqUpdateProfile = createAsyncThunk('', async (formData: any) => {
    console.log('formData - update: ', formData);
});