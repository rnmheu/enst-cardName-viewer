<script setup lang="ts">
import LayoutStack from '@/components/Layout/LayoutStack.vue'
import { Card } from '@/types/Card'

interface Props {
    card: Card
}
defineProps<Props>()
</script>

<template>
    <div
        class="wrapper"
        :class="{
            'box-bg--da': card.type == 'da',
            'box-bg--vo': card.type == 'vo',
            'box-bg--gl': card.type == 'gl',
            'box-bg--pf': card.type == 'pf',
        }"
    >
        <LayoutStack small class="card-box titles">
            <div class="title">{{ card.title }}</div>
            <div>
                <ul class="skills">
                    <li>
                        <span class="skills-label">Center</span>
                        {{ card.skills?.center?.name }}
                    </li>
                    <li>
                        <span class="skills-label">Live</span>
                        {{ card.skills?.live?.name }}
                    </li>
                    <li>
                        <span class="skills-label">Support</span>
                        {{ card.skills?.support?.name }}
                    </li>
                </ul>
            </div>
        </LayoutStack>
        <div class="card-box detail">
            <span
                v-if="
                    card.obtain !== undefined && card.obtain.name !== undefined
                "
                class="obtain"
                >{{ card.obtain.name }}</span
            >
            <span v-else class="obtain">- - -</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
* {
    --border-radius--card: 1rem;
}
.wrapper {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 0;
    margin-left: 0;

    color: var(--text-mid-emphasis);
    background: var(--border-color, white);
    border: 1px var(--white-alpha-90) solid;
    border-radius: var(--border-radius--card);

    &:before {
        content: '';
        position: absolute;
        left: 10%;
        top: 0;
        display: block;
        width: 80%;
        height: 100%;
        box-shadow: 0 20px 20px rgba(0, 0, 0, 0.16); /* filterが効かない場合黒い影をつける */
        z-index: -1;

        background-image: var(--border-color);
        filter: blur(10px);
        box-shadow: none;
    }
}

.box-bg--da {
    --border-color: linear-gradient(-225deg, #fff3e0 0%, #f7b8b8 100%);
    // --border-color: linear-gradient(-225deg, #e66938 0%, #db1e47 100%);
}

.box-bg--vo {
    --border-color: linear-gradient(-225deg, #dad1fd 0%, #a3d4f5 100%);
    // --border-color: linear-gradient(-225deg, #00b6b6 0%, #0049e7 100%);
}
.box-bg--gl {
    --border-color: linear-gradient(-225deg, #f1fdc5 0%, #86dfb2 100%);
    // --border-color: linear-gradient(-225deg, #6cca00 0%, #009225 100%);
}

.box-bg--pf {
    --border-color: linear-gradient(-225deg, #f8f7c0 0%, #ffd3a0 100%);
    // --border-color: linear-gradient(-225deg, #ffc401 0%, #e66920 100%);
}

.card-box {
    padding: var(--box-y-space, var(--s1)) var(--s2);
}

.detail {
    --box-y-space: var(--s0);
    border-radius: 0 0 var(--border-radius--card) var(--border-radius--card);
    background-color: var(--white-alpha-40);
    text-align: center;

    .obtain {
        font-size: var(--fontSize-small);
        color: var(--text-low-emphasis);
    }
}

.titles {
    --box-y-space: var(--s1);

    .title {
        font-size: 1.4rem;
        font-weight: $font-weight--bold;
        font-family: var(--fontFamily--emphasis);
        text-align: center;
    }

    .skills {
        list-style-type: none;
        padding-left: 0;

        > li {
            display: flex;
        }

        &-label {
            width: 9ex;
            color: var(--text-low-emphasis);
        }
    }
}
</style>
