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

    const {data, isMutating, trigger, error, reset} = useSWRMutation(
        `http://127.0.0.1:5000/answers/`,
        sendAnswerRequest
    );

    return {
        data,
        isMutating,
        error,
        reset,
        questionsTrigger: trigger,
    }
}

export const useText = (dream_id) => {
    console.log('useText dream_id:', dream_id)

    const {data, isMutating, trigger, error, reset} = useSWRMutation(
        `http://127.0.0.1:5000/text/`,
        sendAnswerRequest
    );

    return {
        data,
        isMutating,
        error,
        reset,
        textTrigger: trigger,
    }
}

export const useName = (dream_id) => {
    console.log('useText dream_id:', dream_id)

    const {data, isMutating, trigger, error, reset} = useSWRMutation(
        `http://127.0.0.1:5000/name/`,
        sendAnswerRequest
    );

    return {
        data,
        isMutating,
        error,
        reset,
        nameTrigger: trigger,
    }
}

const sendAnswerRequest = async (url, args) => {
    console.log('sendFormRequest args:', args.arg)
    const formData = args.arg.formData
    const outputData = Object.entries(formData).reduce((acc, [key, value]) => {
        if (key !== 'dream_id') {
            acc.answers.push({ [key]: value });
        } else {
            acc[key] = value;
        }
        return acc;
    }, { answers: [] });
    console.log('sendFormRequest dest:', url + outputData?.dream_id);
    console.log('sendFormRequest form data:', outputData)
    console.log('sendFormRequest form data:', JSON.stringify(outputData))

    return fetch(url + outputData?.dream_id, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(outputData),
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

