export const ACTIVITY_STATUS: { [key: number]: { text: string, type: string } } = {
    0: { text: '可报名', type: 'error' },
    1: { text: '活动中', type: 'default' },
    2: { text: '已结束', type: 'default' },
}

export const STATUS_TYPE = {
    NOT_START: 0,
    START: 1,
    END: 2
}

export const IS_PARTICIPANT: { [key: number]: { text: string, color: string } } = {
    0: { text: '未报名用户', color: 'bg-red-400' },
    1: { text: '已报名用户', color: 'bg-blue-400' }
}