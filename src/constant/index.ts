export const ACTIVITY_STATUS: { [key: number]: { text: string, color: string } } = {
    0: { text: '可报名', color: 'text-orange-300 border-orange-300' },
    1: { text: '活动中', color: 'text-gray-400 border-gray-400' },
    2: { text: '已结束', color: 'text-gray-400 border-gray-400' }
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