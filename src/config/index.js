import instance from "./api";

export const createNewUser = (data, teachersId) => instance.put(`/teachers/${teachersId}.json`, data)

export const getTeachers = (teachersId) => instance.get(`/teachers/${teachersId}/.json`)

export const createClass = ( data ) => instance.post(`class/.json`, data)

export const getClass = () => instance.get('class.json')

export const GetMoreClass = ( calssId ) => instance.get(`class/${calssId}.json`)

export const postStudents = ( calssId , data ) => instance.post(`class/${calssId}/students/.json` , data)


export const deleteToStudent = ( classId , id ) => instance.delete(`class/${classId}/students/${id}.json`)




export const changeStudent = (classId, studentId, data) => instance.patch(`/class/${classId}/students/${studentId}/.json`, data)







export const getToCardSlider = ( ) => instance.get(`/SliderCards/.json`)
