import { data } from 'utils/fake-data';
export const getAll = (page: number, filter?: { status?: string }) => {   
    if (filter?.status?.length !== 0) { 
        const newData = data.payrolls.filter((e) => (e.async_status == filter?.status));
    return {
        total: newData.length,
        data: newData.slice((page - 1) * 10, (page -1) * 10 + 10)
    }
    }

    else {
        return {
        total: data.payrolls.length,
        data: data.payrolls.slice((page - 1) * 10, (page -1) * 10 + 10)
    }
    }
}

export const filterData = (status: string, page: number) => { 
    const editData = data.payrolls.filter((e) => (e.async_status == status));
    return {
        total: editData.length,
        data: editData.slice((page - 1) * 10, (page -1) * 10 + 10)
    }
}

export const getDetail = (id: string) => {
    const response = data.payrolls.find((e) => e.payroll_id === id);
    return response;
}
