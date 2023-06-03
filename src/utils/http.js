import useSWRMutation from "swr/mutation";
import useSWR from "swr";


export const useDreamForm = () => {
    const {data, isMutating, trigger, error, reset} = useSWRMutation(
        `http://127.0.0.1:5000/form/`,
        sendFormRequest
    );

    return {
        data,
        isMutating,
        error,
        reset,
        dreamFormTrigger: trigger,
    }
}

const sendFormRequest = async (url, args) => {
    console.log('sendFormRequest args:', args.arg)
    const formData = args.arg.formData
    console.log('sendFormRequest dest:', url + formData?.dream_id);
    console.log('sendFormRequest form data:', formData)
    console.log('sendFormRequest form data:', JSON.stringify(formData))

    return fetch(url + formData?.dream_id, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    }).then(async (res) => {
            if (!res.ok) {
                throw Error('Error');
            }
            const text = await res.text();
            // 如果响应内容为空字符串，返回null；否则尝试解析JSON
            return text.length === 0 ? null : JSON.parse(text);
        }
    )
}

const fetcher = (url) => {
    console.log('fetcher url:', url);
    return fetch(url).then((res) => res.json());
};

export const useQuestions = (dream_id) => {
    console.log('useQuestions dream_id:', dream_id)
    const { data, error } = useSWR(`http://127.0.0.1:5000/questions/${dream_id}`, fetcher);

    return {
        questions: data,
        isLoading: !error && !data,
        isError: error
    }
}