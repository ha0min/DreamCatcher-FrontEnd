import {CheckCard} from "@ant-design/pro-components";

export const EmojiCard = ({emoji, description, value}) => {
    return (
        <CheckCard
            title={
                <div
                    style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        width: '100px',
                        fontSize: '3em'
                    }}
                >
                    {emoji}
                </div>
            }
            description={<div style={{textAlign: 'center'}}>{description}</div>}
            value={value}
            style={{width: 120, height: 130, textAlign: 'center'}}
        />
    )
}
